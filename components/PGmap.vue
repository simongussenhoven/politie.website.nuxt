<template>
  <div>
    <!-- pass your api key below-->
    <GoogleMap v-if="lat && long && googleMapApiKey"
      :api-key="googleMapApiKey"
      :center="{ lat:lat, lng:long }"
      :zoom="12"
      :zoomControl="false"
      style="width: 100%; height:400px;"
    >
      <Marker class="marker" :options="markerOptions"></Marker>
    </GoogleMap>
    <PLoader v-else />
  </div>
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
<!-- <style lang="scss" scoped>
.marker {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  z-index: 999;
}
</style> -->