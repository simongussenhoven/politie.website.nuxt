<template>
  <PCard>
    <template #image>
      <PNewsImage :imageUrl="imageUrl" class="hidden md:flex"/>
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
      <div>
        <PNewsImage :imageUrl="imageUrl" class="max-w-20 md:hidden grow-0 float-right ml-2"/>
        {{ newsItem.introductie }}
      </div>
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