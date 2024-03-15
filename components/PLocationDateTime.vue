<template>
  <div class="flex flex-col">
    <div class="flex gap-4">
      <div class="flex gap-1">
        <MapPin class="size-5 text-muted-foreground" />
        <span>{{ location }}</span>
      </div>
      <div class="flex gap-1">
        <Clock class="size-5 text-muted-foreground" />
        <span>{{ getDateTime(dateTime) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MapPin, Clock } from 'lucide-vue-next'
const props = defineProps({
  location: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
})
</script>