<template>
  <div class="loading-icon">
  <Loader class="size-6 text-muted-foreground" />
  </div>
</template>

<script setup lang="ts">
import { Loader } from 'lucide-vue-next'
</script>
<style scoped>

.loading-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: spin-animation 2s infinite;
}
@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
