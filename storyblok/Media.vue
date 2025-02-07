<script setup>
const props = defineProps({ blok: Object })

const hasMobileMedia = computed(() => {
  return !!props.blok.media_sm?.filename
})
</script>

<template>
  <UtilsMedia
    v-editable="blok"
    :media="blok.media"
    sizes="100vw md:800px lg:1000px xxl:1700px"
    :class="['media', { 'hidden md:block': hasMobileMedia }]"
  />
  <UtilsMedia
    v-editable="blok"
    v-if="hasMobileMedia"
    :media="blok.media_sm"
    sizes="100vw md:800px lg:1000px xxl:1700px"
    class="media md:!hidden"
  />
</template>
