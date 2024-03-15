<template>
  <PCard class="dark max-w-100">
    <template #description>
      {{ newsItem.titel }}
    </template>
    <template #content>
      {{ newsItem.introductie }}
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