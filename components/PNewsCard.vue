<template>
  <PCard class="dark">
    <template #description>
      {{ newsItem.titel }}
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