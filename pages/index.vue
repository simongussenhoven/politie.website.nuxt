<template>
  <PFilterbar v-model:query="newsStore.query"/>
  <div class="news-items flex mt-2 gap-2">
    <div class="card flex flex-col gap-2">
      <PNewsCard v-for="item in newsStore.newsItems" :news-item="item"/>
      <PIntersect :isLoading="isNewsLoading" @intersected="newsStore.getNews()"/>
      <!-- <pre>
        {{ newsStore.newsItems[0] }}
      </pre> -->
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
const newsStore = useNewsStore()
const isLoading = ref(false)
const isNewsLoading = computed(() => newsStore.isLoading)
  // onMounted(() => {
  //   newsStore.getNews()
  // })
</script>