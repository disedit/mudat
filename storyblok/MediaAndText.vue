<script setup>
const props = defineProps({ blok: Object })

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
    class="media-and-text flex flex-col gap-site"
  >
    <UtilsMedia :media="blok.media" :width="800" class="media" />
    <div class="leading-[1.1]">
      <UtilsRichText :content="blok.text" />
    </div>
  </Component>
</template>
