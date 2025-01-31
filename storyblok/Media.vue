<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsMedia v-editable="blok" :media="blok.media" :width="800" class="media" />
</template>
