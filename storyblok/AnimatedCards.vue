<script setup>
const props = defineProps({ blok: Object })

const preferredMotion = usePreferredReducedMotion()
const currentCard = ref(0)
const totalCards = computed(() => props.blok.cards.length)
let interval

onMounted(() => {
  const baseDuration = props.blok.interval || 2000
  const duration = (preferredMotion.value === 'reduce') ? baseDuration * 2 : baseDuration

  interval = setInterval(() => {
    if (!props.blok.loop && currentCard.value >= totalCards.value - 1) {
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
  <section v-editable="blok">
    <template v-for="(card, i) in blok.cards" :key="card._uid">
      <StoryblokComponent v-if="i === currentCard" :blok="card" />
    </template>
  </section>
  <div class="preload sr-only" aria-hidden="true">
    <template v-for="card in blok.cards" :key="card._uid">
      <template v-for="column in card.columns" :key="column._uid">
        <NuxtImg
          v-if="column.component === 'Media'"
          :src="column.media.filename"
          :alt="column.media.alt"
          sizes="100vw md:800px lg:1200px xxl:2000px"
          preload
        />
        <template v-else-if="column.component === 'AnimatedMedia'">
          <NuxtImg
            v-for="media in column.media"
            :src="media.filename"
            :alt="media.alt"
            sizes="100vw md:800px lg:1200px xxl:2000px"
            preload
          />
        </template>
        <template v-else-if="column.component === 'ChunkyText'">
          <NuxtImg
            v-if="column.background.filename"
            :src="column.background.filename"
            :alt="column.background.alt"
            :width="1200"
            preload
          />
        </template>
        <template v-else-if="column.component === 'MediaAndText'">
          <NuxtImg
            v-if="column.media.filename"
            :src="column.media.filename"
            :alt="column.media.alt"
            sizes="100vw md:800px lg:1200px xxl:2000px"
            preload
          />
        </template>
      </template>
    </template>
  </div>
</template>
