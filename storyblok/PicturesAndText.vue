<script setup>
defineProps({ blok: Object })

const { richTextEmpty } = useUtils()
</script>

<template>
  <div v-editable="blok" class="flex flex-col gap-site">
    <div v-if="blok.header && blok.header.length > 0">
      <StoryblokComponent
        v-for="component in blok.header"
        :key="component._uid"
        :blok="component"
      />
    </div>
    <div
      v-if="blok.pictures && blok.pictures.length > 0"
      :class="[
        'flex md:flex-row flex-col',
        {
          'gap-site': blok.gap,
          'constrain-pictures': blok.constrain_pictures
        }
      ]"
    >
        <div
          v-for="component in blok.pictures" :key="component._uid"
          class="pat-media-wrapper"
        >
          <StoryblokComponent :blok="component" />
        </div>
      </div>
    <div v-if="!richTextEmpty(blok.text)" class="pat-text lg:w-[50%] text-md">
      <UtilsRichText :content="blok.text" />
    </div>
    <div v-if="blok.footer && blok.footer.length > 0">
      <StoryblokComponent
        v-for="component in blok.footer"
        :key="component._uid"
        :blok="component"
      />
    </div>
  </div>
</template>

<style lang="scss">
.pat-media-wrapper {
  flex-grow: 1;
  display: flex;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.constrain-pictures .pat-media-wrapper  {
  img, video {
    height: calc(100svh - var(--spacing-navbar) - var(--spacing-site));
  }
}

.pat-text {
  p {
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>