<script setup>
const props = defineProps({ blok: Object })

const loaded = reactive({})

onMounted(() => {
  props.blok.cards.forEach((card, i) => {
    loaded[i] = {}
    card.columns.forEach(column => {
      if (column.component === 'AnimatedMedia') {
        column.media.forEach(media => {
          loaded[i][media.id] = false
        })
      } else if (['Media', 'MediaAndText'].includes(column.component) && column.media.filename) {
        loaded[i][column._uid] = false
      } else if (column.component === 'ChunkyText' && column.background.filename) {
        loaded[i][column._uid] = false
      }
    })
  })
})

const firstSlideLoaded = computed(() => {
  return Object.values(loaded).length > 0 && Object.values(loaded[0]).every(value => !!value)
})

function setLoaded (i, card) {
  loaded[i][card] = true
}
</script>

<template>
  <section v-editable="blok" class="h-viewport">
    <ClientOnly>
      <UtilsBurstCards
        v-if="firstSlideLoaded"
        :cards="blok.cards"
        :interval="blok.interval"
        :loop="blok.loop"
      />
      <div v-else class="text-5xl opacity-25">Loading...</div>
    </ClientOnly>
  </section>
  <div class="preload sr-only" aria-hidden="true" v-if="Object.values(loaded).length > 0">
    <template v-for="(card, i) in blok.cards" :key="card._uid">
      <template v-for="column in card.columns" :key="column._uid">
        <NuxtImg
          v-if="['Media', 'MediaAndText'].includes(column.component) && column.media.filename"
          :src="column.media.filename"
          :alt="column.media.alt"
          sizes="100vw md:600px lg:800px xxl:1300px"
          preload
          @load="setLoaded(i, column._uid)"
        />
        <template v-else-if="column.component === 'AnimatedMedia'">
          <NuxtImg
            v-for="media in column.media"
            :src="media.filename"
            :alt="media.alt"
            :id="media.id"
            sizes="100vw md:600px lg:800px xxl:1300px"
            preload
            @load="setLoaded(i, media.id)"
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
            @load="setLoaded(i, column._uid)"
          />
        </template>
      </template>
    </template>
  </div>
</template>
