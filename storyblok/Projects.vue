<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="flex flex-col gap-site">
    <StoryblokComponent
      v-for="component in blok.projects"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
