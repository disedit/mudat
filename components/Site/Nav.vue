<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

const settings = await useSettings()
const { internalLink } = useLinks()
const route = useRoute()
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')

/* Hide/Show nav bar on scorll */
const { y } = useWindowScroll()
const showNavbar = ref(true)
const lastScrollPosition = ref(0)

watch(y, (currentScrollPosition) => {
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition
})

function isActive(link) {
  return route.fullPath?.startsWith(internalLink(link))
}
</script>

<template>
  <header :class="[
    'fixed bg-offwhite top-0 left-0 right-0 p-site flex items-center gap-site z-50 transition duration-[.5s] ease-out',
    { 'nav-hidden': !showNavbar && !isMobile }
  ]">
    <NuxtLink to="/">
      <SiteLogo class="h-[1.75rem] md:h-[2.5rem]" />
    </NuxtLink>
    <nav class="ms-auto text-base md:text-md">
      <ul class="flex gap-4 uppercase font-bold">
        <li v-for="item in settings?.data.story.content.menu" :key="item._uid">
          <NuxtLink :to="internalLink(item.link)" :class="['hover:underline', { active: isActive(item.link) }]">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active,
.active {
  font-style: italic;
}

.nav-hidden {
  transform: translate3d(0, -100%, 0);
}
</style>