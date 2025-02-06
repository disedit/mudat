<script setup>
const props = defineProps({ blok: Object })

const { hasRichText } = useUtils()
const { internalLink } = useLinks()
const tag = computed(() => {
  return props.blok.link?.id ? resolveComponent('NuxtLink') : 'div'
})
</script>

<template>
  <Component
    v-editable="blok"
    :is="tag"
    :to="internalLink(blok.link)"
    :target="blok.link?.target"
    class="media-and-text flex flex-col gap-site"
  >
    <UtilsMedia :media="blok.media" sizes="100vw md:800px lg:1200px xxl:2000px" class="media" />
    <div v-if="hasRichText(blok.text)" class="leading-[1.1]">
      <UtilsRichText :content="blok.text" />
    </div>
  </Component>
</template>
