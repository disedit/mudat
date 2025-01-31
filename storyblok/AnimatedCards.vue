<script setup>
const props = defineProps({ blok: Object })

const currentCard = ref(0)
const totalCards = computed(() => props.blok.cards.length)
let interval

onMounted(() => {
  const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
  const duration = props.blok.interval || 2000

  interval = setInterval(() => {
    currentCard.value = (currentCard.value >= totalCards.value - 1) ? 0 : currentCard.value + 1
  }, isReduced ? duration * 5 : duration)
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
