<template>
  <PCard class="md:opacity-90 md:hover:opacity-100">
    <template #image>
      <PNewsImage :imageUrl="imageUrl" />
    </template>
    <template #title>
      {{ person.titel }}
    </template>
      <template #description>
      <PLocationDateTime 
        :location="person.laatstgezienin" 
        :dateTime="person.publicatiedatum"
      />
    </template>
    <template #content>
      {{ person.introductie }}
    </template>
    <template v-if="large" #footer>
      <PMissingCardExtra :person="person" />
    </template>
  </PCard> 
</template>
<script setup lang="ts">
import { ContactRound, MapPin } from 'lucide-vue-next'
  const props = defineProps({
  person: {
    type: Object,
    required: true,
    },
    large: {
      type: Boolean,
      default: false,
    },
})

const imageUrl = computed(() => {
  if (props.person.afbeeldingen.length) {
    return props.person.afbeeldingen[0].url
  }
  return '/default-person.jpg'
})
</script>