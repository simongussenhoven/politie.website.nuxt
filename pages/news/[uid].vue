<template>
    <div v-if="newsStore.newsItem?.uid" class="flex flex-col gap-2">
    <PNewsCard 
      class="dark" 
      :news-item="newsStore.newsItem"
    />
    <PCard class="dark">
      <template #title>
        Meer info
      </template>
      <template #content>
        <div class="pars" v-for="par in newsStore.newsItem.alineas" v-html="sanitize(par.opgemaaktetekst)"/>
      </template>
    </PCard>
    <div class="news-items flex mt-2 gap-2" v-if="regionalNews.length">
      <div class="card flex flex-col gap-2 w-full">
        <h2 class="text-3xl font-semibold leading-none tracking-tight mb-3" >Meer nieuws uit de regio {{ newsStore.newsItem.gebied }}</h2>
        
        <NuxtLink :to="`/news/${item.uid}`" v-for="item in regionalNews" >
          <PNewsCard :news-item="item"/>
        </NuxtLink>
        <PIntersect :isLoading="newsStore.isLoading" @intersected="newsStore.getRegionalNews()" :isLast="newsStore.regionIterator?.last"/>
      </div>
    </div>
    </div>
  
</template>

<script setup lang="ts">
const route = useRoute()
const uid = String(route.params.uid)
const newsStore = useNewsStore()

const regionalNews = computed(() => {
  return newsStore.regionalNewsItems.filter((item) => item.uid !== uid)
})

onMounted(() => {
  newsStore.getNewsItemById(uid)
})
  
onUnmounted(() => {
  newsStore.newsItem = null
  newsStore.resetRegionalNews()
})
</script>
<style scoped lang="scss">
  .pars {
    :deep(p) {
      margin-bottom: 1rem;
    }
  }
</style>