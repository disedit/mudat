<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="media-and-text flex flex-col gap-site">
    <UtilsMedia :media="blok.media" :width="800" class="media" />
    <div class="leading-[1.1]">
      <UtilsRichText :content="blok.text" />
    </div>
  </div>
</template>
