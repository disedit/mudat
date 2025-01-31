<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" :style="{ '--height-lg': blok.height, '--height-sm': blok.height_sm }" />
</template>

<style lang="scss" scoped>
div {
  height: var(--height-sm, var(--height-lg, 0));
}

@media (min-width: 48rem) {
  div {
    height: var(--height-lg, 0);
  }
}
</style>