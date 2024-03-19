<template>
  <div v-if="missingStore.missingPerson?.uid" class="flex flex-col gap-2">
    <PMissingPersonCard :person="missingStore.missingPerson" />
    <PCard class="dark">
      <template #content>
        <div class="content flex flex-col-reverse md:flex-row">
          <div class="table md:pr-5">
            <table class="table-auto bg-slate-900 rounded min-w-full">
              <thead class="border">
                <th class="text-left p-4">Kenmerk</th>
                <th class="text-left">Waarde</th>
              </thead>
              <tbody>
                <tr v-for="kenmerk in missingStore.missingPerson.signalementen[0].persoonskenmerken" class="border p-5">
                  <td class="py-4 pr-5">
                    <span class="mx-3">{{ kenmerk.label }}</span>
                  </td>
                  <td>
                    <span class="pr-10">{{ kenmerk.waarde }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="map-container min-w-45 md:min-w-96 pb-4">
            <PGmap 
            :lat="missingStore.missingPerson.locaties[0].latitude"
            :long="missingStore.missingPerson.locaties[0].longitude"
            />
          </div>
        </div>

      </template>
    </PCard>
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
