<template>
  <div v-if="missingStore.missingPerson?.uid" class="flex flex-col gap-2">
    <PMissingPersonCard :person="missingStore.missingPerson" />
    <!-- <pre>
      {{ missingStore.missingPerson }}
    </pre> -->
    <PCard class="dark">
      <template #title>
        Meer info
      </template>
      <template #content>
        <div class="pars">
          <table  class="table-auto bg-slate-900 rounded">
            <thead class="border">
              <th class="text-left p-4">Kenmerk</th>
              <th class="text-left">Waarde</th>
            </thead>
            <tbody>
              <tr v-for="kenmerk in missingStore.missingPerson.signalementen[0].persoonskenmerken" class="border p-5">
                <td class="py-4 pr-5"><span class="mx-3">{{ kenmerk.label }}</span></td>
                <td><span class="pr-10">{{ kenmerk.waarde }}</span></td>
              </tr>
            </tbody>

          </table>
        </div>
      </template>
    </PCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const uid = String(route.params.uid)


const missingStore = useMissingStore()

onMounted(() => {
  missingStore.getMissingPersonById(uid)
})

onUnmounted(() => {
  missingStore.missingPerson = null
})
</script>
<style scoped lang="scss">
.pars {
  :deep(p) {
    margin-bottom: 1rem;
  }
}
</style>