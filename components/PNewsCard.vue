<template>
  <PCard class="dark md:opacity-90 md:hover:opacity-100">
    <template #image>
      <PNewsImage :imageUrl="imageUrl" />
    </template>
    <template #title>
      {{ newsItem.titel }}
    </template>
    <template #description>
      <PLocationDateTime 
        :location="newsItem.gebied" 
        :dateTime="newsItem.publicatiedatum"
      />
    </template>
    <template #content>
      {{ newsItem.introductie }}
    </template>
  </PCard>
</template>
<script setup lang="ts">
  const imageUrl = computed(() => {
    const img = props.newsItem.afbeelding.url
    return img !== '' && !img.includes('burgernet') ? img : '/default.png'
  })
  const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})
</script>