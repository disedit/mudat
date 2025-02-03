<script setup>
defineProps({ blok: Object })

const { internalLink } = useLinks()
const preferredMotion = usePreferredReducedMotion()

const show = ref(false)
const index = ref(0)
let interval

function hover () {
  show.value = true
  if (preferredMotion.value === 'no-preference') {
    interval = setInterval(() => index.value++, 100)
  } else {
    index.value = 0
  }
}

function unhover () {
  show.value = false
  index.value = 0
  clearInterval(interval)
}

onUnmounted(() => {
  interval && clearInterval(interval)
})
</script>

<template>
  <NuxtLink
    v-editable="blok"
    :to="internalLink(blok.link)"
    class="grid md:grid-cols-[auto_1fr] md:grid-rows-2 gap-site mb-10 md:mb-0"
    @mouseenter="hover"
    @mouseleave="unhover"
    prefetchedClass="prefetched"
    :style="{
      '--base-height': 'calc(10rem + 10vi)'
    }"
  >
    <UtilsMedia
      v-if="blok.thumbnail && blok.thumbnail.filename"
      :width="750"
      :media="blok.thumbnail"
      class="md:hidden w-full aspect-square object-cover"
    />
    <h2 class="font-medium uppercase text-5xl mb-site md:mb-0">
      {{ blok.title }}
    </h2>
    <div class="hidden md:flex row-span-2 flex-wrap gap-site justify-self-end justify-start h-(--base-height) overflow-clip flex-row-reverse">
      <UtilsMedia
        v-if="blok.thumbnail && blok.thumbnail.filename"
        :width="750"
        :media="blok.thumbnail"
        class="h-(--base-height) w-(--base-height) object-cover"
      />
      <template v-for="(picture, i) in blok.hover_thumbnails" :key="picture.id">
        <UtilsMedia
          :width="750"
          :media="picture"
          :class="[
            'h-(--base-height) w-(--base-height) object-cover',
            { 'opacity-0': index < i || !show }
          ]"
        />
      </template>
    </div>
    <div class="leading-[1.1] text-md self-end">
      <UtilsRichText :content="blok.details" />
    </div>
  </NuxtLink>
</template>
