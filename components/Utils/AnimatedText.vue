<script setup>
defineProps({
  text: { type: String, required: true }
})

const reveal = ref(0)
const isReduced = ref(false)
let interval

onMounted(() => {
  isReduced.value = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
  console.log(isReduced.value)
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
        'opacity-0': i >= reveal && !isReduced
      }"
    >
      {{ word }}{{ ' ' }}
    </span>
  </div>
</template>
