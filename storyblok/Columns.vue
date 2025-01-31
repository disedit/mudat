<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    :class="[
      'grid columns gap-site',
      {
        'stretch-pictures': blok.stretch_pictures
      }
    ]"
    :style="{
      '--template-sm': blok.template_sm,
      '--template-lg': blok.template_lg
    }">
    <StoryblokComponent
      v-for="component in blok.content"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>

<style lang="scss">
.columns {
  grid-template-columns: var(--template-lg, 1fr);
}

.stretch-pictures {
  img, video {
    height: 100%;
    object-fit: cover;
  }
}
</style>