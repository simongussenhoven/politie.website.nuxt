<template>

  <div class="content flex flex-col-reverse md:flex-row mt-5 w-full gap-3">

    <div :class="width" class="table-container">
      <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
        <ContactRound />Signalement
      </h2>
      <table class="table-auto bg-slate-900 rounded w-full border">
        <thead class="border">
          <th class="text-left p-4">Kenmerk</th>
          <th class="text-left">Waarde</th>
        </thead>
        <tbody>
          <tr v-for="kenmerk in person.signalementen[0].persoonskenmerken" class="border">
            <td class="py-4">
              <span class="mx-3">{{ kenmerk.label }}</span>
            </td>
            <td>
              <span class="pr-10">{{ kenmerk.waarde }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="person.locaties.length"  :class="width" class="map-container flex flex-col md:min-h-full pb-5 md:pb-0">
      <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
        <MapPin />Locaties
      </h2>
      <PGmap :lat="person.locaties[0].latitude" :long="person.locaties[0].longitude" />
    </div>

    <div :class="width" class="carousel flex flex-col min-h-full" >
      <h2 class="text-xl font-bold mb-4 flex items-center gap-2"><Image/>Meer afbeeldingen</h2>
      <PSimpleCarousel :images="allImages" class="grow"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ContactRound, MapPin, Image } from 'lucide-vue-next'

const width = computed(() => {
  return allImages.value.length > 0 ? 'md:w-1/3' : 'md:w-1/2'
})

const props = defineProps({
  person: {
    type: Object,
    required: true,
  }
})

const allImages = computed(() => {
  return props.person.afbeeldingen.concat(props.person.meerafbeeldingen)
})
</script>