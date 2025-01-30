<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section>
    <StoryblokComponent
      v-for="card in blok.cards"
      :key="card._uid"
      :blok="card"
    />
  </section>
</template>
