<script setup>
const siteSettings = await useSettings()

useHead({
  htmlAttrs: { lang: 'es-ES' },
  meta: [
    { name: 'theme-color', content: '#fff' },
    { name: 'msapplication-TileColor', content: '#fff' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'mask-icon', color: '#652B80', href: '/safari-pinned-tab.svg' },
    { rel: 'manifest', color: '#652B80', href: '/site.webmanifest' },
  ]
})
</script>

<template>
  <div class="font-sans">
    <NuxtLoadingIndicator :color="false" />
    <SiteNav />
    <main class="page">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style lang="scss">

</style>