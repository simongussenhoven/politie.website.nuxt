<template>
  <PCard class="dark md:opacity-90 md:hover:opacity-100">
    <template #image>
      <img :src="imageUrl" alt="newsItem.titel" class="min-w-44" />
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
      {{ getMaxChars(newsItem.introductie, 325) }}
    </template>
  </PCard>
</template>
<script setup lang="ts">
  const imageUrl = computed(() => {
    const img = props.newsItem.afbeelding.url
    return img !== '' ? img : '/default.png'
  })
  const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})
</script>