<template>
  <div v-if="missingStore.missingPerson?.uid" class="flex flex-col gap-2">
    <PMissingPersonCard :person="missingStore.missingPerson" large/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const uid = String(route.params.uid);

const missingStore = useMissingStore();

onMounted(() => {
  missingStore.getMissingPersonById(uid);
});

const mapLocation = computed(() => {
  return {
    latitude: Number(missingStore.missingPerson?.locaties[0].latitude) ?? 0,
    longitude: Number(missingStore.missingPerson?.locaties[0].longitude) ?? 0,
  }
})

onUnmounted(() => {
  missingStore.missingPerson = null;
});
</script>
<style scoped lang="scss">
.pars {
  :deep(p) {
    margin-bottom: 1rem;
  }
}
</style>
