<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsMedia :media="blok.media" :width="800" class="media" />
</template>
