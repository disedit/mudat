<script setup>
const props = defineProps({ blok: Object })

const preferredMotion = usePreferredReducedMotion()
const currentPicture = ref(0)
const totalPictures = computed(() => props.blok.media.length)
let interval

onMounted(() => {
  const baseDuration = props.blok.interval || 500
  const duration = (preferredMotion.value === 'reduce') ? baseDuration * 2 : baseDuration

  interval = setInterval(() => {
    if (!props.blok.loop && currentPicture.value >= totalPictures.value - 1) {
      clearInterval(interval)
      interval = null
      return
    }

    currentPicture.value = (currentPicture.value >= totalPictures.value - 1) ? 0 : currentPicture.value + 1
  }, duration)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <template v-for="(media, i) in blok.media" :key="media._uid">
    <UtilsMedia v-if="i === currentPicture" :media="media" :width="800" class="media" />
  </template>
</template>
