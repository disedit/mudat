<script setup>
const props = defineProps({ blok: Object })

const { internalLink } = useLinks()
const { locale } = useI18n()
const version = useEnvironment()
const storyblokApi = useStoryblokApi()
const { data: projects } = await useAsyncData('nextPrevProjects' + props.blok._uid, async () => await storyblokApi.get(`cdn/stories`, {
    by_uuids: props.blok.prev[0] + ',' + props.blok.next[0],
    excluding_fields: 'body,seo_title,seo_picture,seo_keywords,seo_description',
    language: locale.value,
    version
}))

const prevProject = computed(() => {
  if (!props.blok.prev || props.blok.prev.length === 0) return null
  return projects.value?.data.stories.filter((story) => story.uuid === props.blok.prev[0])[0]
})

const nextProject = computed(() => {
  if (!props.blok.next || props.blok.next.length === 0) return null
  return projects.value?.data.stories.filter((story) => story.uuid === props.blok.next[0])[0]
})
</script>

<template>
  <div v-editable="blok" class="grid grid-cols-2 text-base md:text-md leading-[0.25] my-site">
    <NuxtLink
      v-if="prevProject"
      :to="internalLink(prevProject.full_slug)"
      class="block hover:italic"
    >
      <div class="text-5xl font-medium">BACK</div>
      <div>/{{ prevProject.content.title }}</div>
    </NuxtLink>
    <div v-else />

    <NuxtLink
      v-if="nextProject"
      :to="internalLink(nextProject.full_slug)"
      class="block text-right hover:italic"
    >
      <div class="text-5xl font-medium">NEXT</div>
      <div>/{{ nextProject.content.title }}</div>
    </NuxtLink>
    <div v-else />
  </div>
</template>

