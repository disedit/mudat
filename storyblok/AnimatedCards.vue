<script setup>
const props = defineProps({ blok: Object })

const loaded = reactive({})

onMounted(() => {
  props.blok.cards.forEach(card => {
    card.columns.forEach(column => {
      if (column.component === 'AnimatedMedia') {
        column.media.forEach(media => {
          loaded[media.id] = false
        })
      } else if (['Media', 'MediaAndText'].includes(column.component) && column.media.filename) {
        loaded[column._uid] = false
      } else if (column.component === 'ChunkyText' && column.background.filename) {
        loaded[column._uid] = false
      }
    })
  })
})

const allImagesLoaded = computed(() => {
  return Object.values(loaded).every(value => !!value)
})

function setLoaded (id) {
  loaded[id] = true
}
</script>

<template>
  <section v-editable="blok" class="h-viewport">
    <UtilsBurstCards :cards="blok.cards" v-if="allImagesLoaded" />
  </section>
  <div class="preload sr-only" aria-hidden="true" v-if="Object.values(loaded).length > 0">
    <template v-for="card in blok.cards" :key="card._uid">
      <template v-for="column in card.columns" :key="column._uid">
        <NuxtImg
          v-if="['Media', 'MediaAndText'].includes(column.component) && column.media.filename"
          :src="column.media.filename"
          :alt="column.media.alt"
          sizes="100vw md:800px lg:1000px xxl:1700px"
          preload
          @load="setLoaded(column._uid)"
        />
        <template v-else-if="column.component === 'AnimatedMedia'">
          <NuxtImg
            v-for="media in column.media"
            :src="media.filename"
            :alt="media.alt"
            :id="media.id"
            sizes="100vw md:800px lg:1000px xxl:1700px"
            preload
            @load="setLoaded(media.id)"
          />
        </template>
        <template v-else-if="column.component === 'ChunkyText'">
          <NuxtImg
            v-if="column.background.filename"
            :src="column.background.filename"
            :alt="column.background.alt"
            :width="1200"
            preload
            :id="column._uid"
            @load="setLoaded(column._uid)"
          />
        </template>
      </template>
    </template>
  </div>
</template>
