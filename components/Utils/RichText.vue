<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const renderedContent = computed(() => {
  return renderRichText(props.content)
})
</script>

<template>
  <div v-html="renderedContent" class="rich-text-rendered text-base md:text-md" />
</template>

<style lang="scss">
.rich-text-rendered {
  a {
    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: var(--text-5xl);
    font-weight: 500;
    line-height: 1;
    hyphens: auto;

    &:not(:first-child) {
      margin-top: 3rem;
    }
  }

  p {
    line-height: 1.25;
    hyphens: auto;
  }
}

.text-strip .rich-text-rendered,
.media-and-text .rich-text-rendered {
  p {
    line-height: 1.1;
  }
}
</style>