<template>
  <PFilterbar/>
  <div class="news-items flex flex-wrap justify-start mt-2">
    <PNewsCard v-for="item in newsStore.newsItems" :news-item="item"/>
    <Button @click="newsStore.getNews()">Hi</Button>
  </div>
</template>
<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
const newsStore = useNewsStore()
  onMounted(() => {
    newsStore.getNews()
  })
</script>