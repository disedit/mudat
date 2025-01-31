<script lang="ts" setup>
const settings = await useSettings()
const { internalLink } = useLinks()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-offwhite p-site flex items-center gap-site z-50">
    <NuxtLink to="/">
      <SiteLogo class="h-[2.5rem]" />
    </NuxtLink>
    <nav class="ms-auto text-md">
      <ul class="flex gap-4 uppercase font-bold">
        <li v-for="item in settings?.data.story.content.menu" :key="item._uid">
          <NuxtLink :to="internalLink(item.link)" class="hover:underline">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  font-style: italic;
}
</style>