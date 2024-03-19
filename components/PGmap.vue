<template>
    <GoogleMap class="map min-w-full grow" v-if="lat && long && googleMapApiKey"
      :api-key="googleMapApiKey"
      :center="{ lat:lat, lng:long }"
      :zoom="12"
      :zoomControl="false"
      style="width: 100%; height:400px;"
    >
      <Marker class="marker" :options="markerOptions"></Marker>
    </GoogleMap>
    <PLoader v-else />
</template>
<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'
const { googleMapApiKey } = useRuntimeConfig().public

const props = defineProps<{
  lat: number,
  long: number,
}>()
const markerOptions = { position: {lat:props.lat, lng: props.long } }
</script>
