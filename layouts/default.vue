<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: 'es-ES', dir: head.value.htmlAttrs.dir, class: 'bg-offwhite' },
  meta: [
    { name: 'theme-color', content: '#f1f0eb' },
    { name: 'msapplication-TileColor', content: '#f1f0eb' },
    { name: 'apple-mobile-web-app-title', content: 'Mudat' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    ...head.value.link
  ],
  script: [
    { src: 'https://cloud.umami.is/script.js', 'data-website-id': '7e726d31-9cb1-4d47-800a-5523e9ea150b', defer: true }
  ]
})
</script>

<template>
  <div class="font-sans">
    <NuxtLoadingIndicator color="#000" />
    <SiteNav />
    <main class="flex flex-col gap-site p-site pt-navbar">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
