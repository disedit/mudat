<script setup>
defineProps({ blok: Object })
</script>

<template>
  <article
    v-editable="blok"
    :class="[
      'card',
      'flex flex-col gap-site',
      {
        'viewport-height': blok.viewport_height
      }
    ]"
  >
    <div v-if="blok.header && blok.header.length > 0">
      <StoryblokComponent
        v-for="component in blok.header"
        :key="component._uid"
        :blok="component"
      />
    </div>
    <div class="card-columns flex flex-col md:flex-row gap-site">
      <div
        v-for="component in blok.columns"
        :key="component._uid"
        :class="['card-column relative flex', `column-${component.component}`]"
      >
        <StoryblokComponent :blok="component" />
      </div>
    </div>
    <div v-if="blok.footer && blok.footer.length > 0">
      <StoryblokComponent
        v-for="component in blok.footer"
        :key="component._uid"
        :blok="component"
      />
    </div>
  </article>
</template>

<style lang="scss">
.card {
  &.viewport-height {
    min-height: var(--spacing-viewport);

    .card-columns {
      flex-grow: 1;
    }

    .media {
      display: block;
      position: absolute;
      inset: 0;
      height: 100%;
      min-height: 20vh;
      object-fit: cover;
    }
  }

  &-columns {
    & > * {
      flex-grow: 1;
      flex-basis: 50%;
    }
  }

  .media {
    width: 100%;
  }

  .media-and-text {
    width: 50% !important;
    align-self: center;
    margin-inline: auto;

    img,
    video {
      position: static !important;
      width: 100% !important;
      height: auto !important;
    }
  }
}

@media (max-width: 48rem) {
  .card {
    .column-ChunkyText {
      &:not(:has(.has-background)) {
        padding-bottom: 5em;
        flex-grow: 0;
      }
    }
  }
}
</style>