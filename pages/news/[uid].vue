<template>

  <div v-if="newsStore.newsItem" class="flex flex-col gap-2">
    <!-- <pre>
    {{ newsStore.newsItem }}
  </pre> -->
    <PNewsCard 
      class="dark" 
      :news-item="newsStore.newsItem"
    />
    <PCard class="dark">
      <template #title>
        Meer info
      </template>
      <template #content>
        <div class="pars" v-for="par in newsStore.newsItem.alineas" v-html="sanitizeHtml(par.opgemaaktetekst)"/>
      </template>
    </PCard>
  </div>
  
</template>

<script setup lang="ts">
import sanitizeHtml from 'sanitize-html';
const route = useRoute()
const uid = String(route.params.uid)
const newsStore = useNewsStore()
newsStore.getNewsById(uid)

onUnmounted(() => {
  newsStore.newsItem = null
})
</script>
<style scoped lang="scss">
  .pars {
    :deep(p) {
      margin-bottom: 1rem;
    }
  }
</style>