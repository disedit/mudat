<script setup>
const settings = await useSettings()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="p-site grid grid-cols-2 text-md">
    <div>
      {{ settings?.data?.story?.content?.footer_text }}
    </div>
    <div class="text-right uppercase">
      <template v-for="(lang, i) in locales" :key="lang.code">
        <NuxtLink
          :to="switchLocalePath(lang.code)"
          active-class="font-bold"
        >
          {{ lang.code }}
        </NuxtLink>
        <span v-if="i < locales.length - 1">/</span>
      </template>
    </div>
  </div>
</template>

<style>

</style>