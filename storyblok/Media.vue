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
    sizes="100vw md:600px lg:800px xxl:1400px"
    :class="['media', { 'hidden md:block': hasMobileMedia }]"
  />
  <UtilsMedia
    v-editable="blok"
    v-if="hasMobileMedia"
    :media="blok.media_sm"
    sizes="100vw md:600px lg:800px xxl:1400px"
    class="media md:!hidden"
  />
</template>
