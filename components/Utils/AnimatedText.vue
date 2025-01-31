<script setup>
defineProps({
  text: { type: String, required: true }
})

const preferredMotion = usePreferredReducedMotion()
const reveal = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    reveal.value++
  }, 150)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="animated-text">
    <span
      v-for="(word, i) in text.split(' ')"
      :key="i"
      :class="{
        'opacity-0': i >= reveal && preferredMotion === 'no-preference'
      }"
    >
      {{ word }}{{ ' ' }}
    </span>
  </div>
</template>
