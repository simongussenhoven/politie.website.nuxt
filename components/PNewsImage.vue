<template>
  <div v-if="isLoading"></div>
  <img v-else :src="props.imageUrl" alt="newsItem.titel" class="h-auto w-100 md:min-w-40 md:max-w-44 rounded md:rounded-l object-contain md:object-cover items-start border" />
</template>
<script setup lang="ts">
  const props = defineProps({
    imageUrl: {
      type: String,
      required: true,
    },
  })
  const isLoading = ref(true)
  try {
    const img = new Image()
    img.src = props.imageUrl
    img.onload = () => {
      isLoading.value = false
    }
    img.onerror = () => {
      isLoading.value = true
    }
  } catch (error) {
    console.error(error)
  }
</script>
<style lang="scss">
  .skeleton {
    background-color: #e2e8f0;
    animation: loading 1.5s infinite;
  }
  @keyframes loading {
    0% {
      background-color: black
    }
    50% {
      background-color: #0d0d0d
    }
    100% {
      background-color: black
    }
  }
</style>