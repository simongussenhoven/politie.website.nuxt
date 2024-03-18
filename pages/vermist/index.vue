<template>
  <!-- <PFilterbar v-model:query="missingStore.query"/> -->
  <div class="news-items flex mt-2 gap-2">
    <div class="card flex flex-col gap-2 w-full">
      <NuxtLink :to="`/vermist/${item.uid}`" v-for="item in missingStore.missingPersons" >
        <PMissingPersonCard :person="item"/>
      </NuxtLink>
      <PIntersect :isLoading="isMissingLoading" @intersected="missingStore.getMissing" :isLast="missingStore.iterator?.last"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useMissingStore } from '../../stores/missingStore'
  const missingStore = useMissingStore()
  const isMissingLoading = computed(() => missingStore.isLoading)
</script>