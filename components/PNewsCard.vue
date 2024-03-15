<template>
  <!-- <pre>
    {{ newsItem }}
  </pre> -->
  <PCard class="dark">
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
  const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})
</script>