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
</script>

<template>
  <section v-editable="blok">
    <template v-for="(card, i) in blok.cards" :key="card._uid">
      <StoryblokComponent v-if="i === currentCard" :blok="card"/>
    </template>
  </section>
</template>
