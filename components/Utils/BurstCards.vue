<script setup>
const props = defineProps({
  cards: { type: Array, required: true },
  interval: { type: Number, default: 3000 },
  loop: { type: Boolean, default: true }
})

const preferredMotion = usePreferredReducedMotion()
const currentCard = ref(0)
const totalCards = computed(() => props.cards.length)
let interval

onMounted(() => {
  const duration = (preferredMotion.value === 'reduce') ? props.blok.interval * 2 : props.blok.interval

  interval = setInterval(() => {
    if (!props.loop && currentCard.value >= totalCards.value - 1) {
      clearInterval(interval)
      interval = null
      return
    }

    currentCard.value = (currentCard.value >= totalCards.value - 1) ? 0 : currentCard.value + 1
  }, duration)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <template v-for="(card, i) in cards" :key="card._uid">
    <StoryblokComponent v-if="i === currentCard" :blok="card" />
  </template>
</template>
