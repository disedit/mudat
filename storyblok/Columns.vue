<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    :class="[
      'grid columns gap-site',
      {
        'stretch-pictures': blok.stretch_pictures,
        'reverse-columns': blok.reverse_columns_on_mobile
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

@media (max-width: 48rem) {
  .columns {
    grid-template-columns: var(--template-sm, 1fr);
  }

  .reverse-columns {
    & > *:first-child {
      grid-row: 2;
    }

    & > *:nth-child(2) {
      grid-row: 1;
    }
  }
}
</style>