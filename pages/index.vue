<template>
  <!-- <PFilterbar v-model:query="newsStore.query"/> -->
  <div class="news-items flex mt-2 gap-2">
    <div class="card flex flex-col gap-2 w-full">
      <NuxtLink :to="`/news/${item.uid}`" v-for="item in newsStore.newsItems" >
        <PNewsCard :news-item="item"/>
      </NuxtLink>
      <PIntersect :isLoading="isNewsLoading" @intersected="newsStore.getNews()" :isLast="newsStore.iterator?.last"/>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
const newsStore = useNewsStore()
const isNewsLoading = computed(() => newsStore.isLoading)

</script>