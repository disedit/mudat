<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="colspan"
    :style="{
      '--colspan': blok.colspan,
      '--colspan-sm': blok.colspan_sm
    }"
  >
    <StoryblokComponent
      v-for="component in blok.content"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>

<style scoped>
.colspan {
  grid-column: span var(--colspan, 1) / span var(--colspan, 1);
}

@media (max-width: 48rem) {
  .colspan {
    grid-column: span var(--colspan-sm, var(--colspan, 1)) / span var(--colspan-sm, var(--colspan, 1));
  }
}
</style>

