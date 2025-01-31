<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsRichText 
    v-editable="blok"
    :content="blok.content"
    :class="{ 'underline-links': blok.underline_links }"
  />
</template>

<style lang="scss">
@layer components {
  .underline-links {
    a {
      text-decoration: underline;
    }
  }
}
</style>