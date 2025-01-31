<script setup>
defineProps({ blok: Object })

const { internalLink } = useLinks()
const preferredMotion = usePreferredReducedMotion()

const show = ref(false)
const index = ref(2)
let interval

function hover () {
  show.value = true
  if (preferredMotion.value === 'no-preference') {
    interval = setInterval(() => index.value--, 100)
  } else {
    index.value = 0
  }
}

function unhover () {
  show.value = false
  index.value = 2
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
    class="grid grid-cols-[auto_1fr] grid-rows-2 gap-site"
    @mouseenter="hover"
    @mouseleave="unhover"
  >
    <h2 class="font-medium uppercase text-5xl">
      {{ blok.title }}
    </h2>
    <div class="row-span-2 flex gap-site justify-self-end">
      <template v-for="(picture, i) in blok.hover_thumbnails" :key="picture.id">
        <UtilsMedia
          :width="750"
          :media="picture"
          :class="[
            'h-[20rem] w-[20rem] object-cover',
            { 'opacity-0': index > i || !show }
          ]"
        />
      </template>
      <UtilsMedia
        v-if="blok.thumbnail && blok.thumbnail.filename"
        :width="750"
        :media="blok.thumbnail"
        class="h-[20rem] w-[20rem] object-cover"
      />
    </div>
    <div class="leading-[1.1] text-md self-end">
      <UtilsRichText :content="blok.details" />
    </div>
  </NuxtLink>
</template>
