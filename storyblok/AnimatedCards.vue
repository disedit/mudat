<script setup>
const props = defineProps({ blok: Object })

const currentCard = ref(0)
const totalCards = computed(() => props.blok.cards.length)
let interval

onMounted(() => {
  interval = setInterval(() => {
    currentCard.value = (currentCard.value >= totalCards.value - 1) ? 0 : currentCard.value + 1
  }, props.blok.interval || 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section>
    <template v-for="(card, i) in blok.cards" :key="card._uid">
      <StoryblokComponent v-if="i === currentCard" :blok="card"/>
    </template>
  </section>
</template>
