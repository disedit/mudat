<script setup>
const props = defineProps({ blok: Object })

const hasBackground = computed(() => !!props.blok.background.filename)

const img = useImage()
const backgroundStyles = computed(() => {
  if (!hasBackground.value) return null
  const imgUrl = img(props.blok.background.filename, { width: 1200 })
  return { backgroundImage: `url('${imgUrl}')` }
})

const { richTextEmpty } = useUtils()
</script>

<template>
  <div
    v-editable="blok"
    :class="[
      'flex flex-col gap-site w-full',
      {
        'justify-start': blok.text_position === 'start',
        'justify-center': blok.text_position === 'center',
        'justify-end': blok.text_position === 'end',
        'has-background': hasBackground,
        'inverted-effect': blok.inverted_effect
      }
    ]"
    :style="backgroundStyles"
  >
    <div class="text-container text-5xl font-medium hyphens-auto text-justify">
      <template v-if="!blok.animate_text">
        {{ blok.text }}
      </template>
      <UtilsAnimatedText v-else :text="blok.text" />
    </div>
    
    <div
      v-if="richTextEmpty(blok.detail)"
      :class="[
        'text-md mt-8',
        {
          'text-left': blok.detail_align === 'left',
          'text-center': blok.detail_align === 'center',
          'text-right': blok.detail_align === 'right',
          'text-justify': blok.detail_align === 'justify',
        }
      ]"
    >
      <UtilsRichText :content="blok.detail" />
    </div>
  </div>
</template>

<style scoped>
.has-background {
  color: var(--color-white);
  padding: var(--spacing-site);
  background-size: cover;
  background-position: center;
}

.inverted-effect .text-container {
  mix-blend-mode: difference;
}
</style>