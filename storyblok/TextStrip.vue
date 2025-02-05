<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="flex gap-site text-md text-strip">
    <div class="grow">
      <UtilsRichText :content="blok.text_left" />
    </div>
    <div class="grow text-right">
      <UtilsRichText :content="blok.text_right" />
    </div>
  </div>
</template>
