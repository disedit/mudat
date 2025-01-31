<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="flex flex-col gap-site">
    <StoryblokComponent
      v-for="component in blok.projects"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
