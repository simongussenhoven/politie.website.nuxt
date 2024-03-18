<template>
  <Progress :model-value="33" />
</template>

<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
const props = defineProps({
  modelValue: Number
})
</script>
