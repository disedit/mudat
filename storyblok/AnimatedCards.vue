<script setup>
const props = defineProps({ blok: Object })

const preferredMotion = usePreferredReducedMotion()
const currentCard = ref(0)
const totalCards = computed(() => props.blok.cards.length)
let interval

onMounted(() => {
  const baseDuration = props.blok.interval || 2000
  const duration = (preferredMotion.value === 'reduce') ? baseDuration * 5 : baseDuration

  interval = setInterval(() => {
    currentCard.value = (currentCard.value >= totalCards.value - 1) ? 0 : currentCard.value + 1
  }, duration)
})

onUnmounted(() => {
  clearInterval(interval)
})

/*
// Preload images
const img = useImage()
const images = computed(() => {
  let preloadImages = []
  props.blok.cards.forEach(card => {
    const mediaCards = card.columns.filter(block => block.component === 'Media')
    mediaCards.forEach(mediaCard => {
      const url = img(mediaCard.media.filename, { width: 800 })
      preloadImages.push(url)
    })
  })
  return preloadImages.map(href => ({ rel: "prefetch", href }))
})

useHead({
  link: images.value
})
*/
</script>

<template>
  <section v-editable="blok">
    <template v-for="(card, i) in blok.cards" :key="card._uid">
      <StoryblokComponent v-if="i === currentCard" :blok="card" />
    </template>
  </section>
  <div class="preload sr-only">
    <template v-for="card in blok.cards" :key="card._uid">
      <template v-for="column in card.columns" :key="column._uid">
        <NuxtImg
          v-if="column.component === 'Media'"
          :src="column.media.filename"
          :width="800"
          preload
        />
      </template>
    </template>
  </div>
</template>
