<template>
  <Menubar class="border-none !h-12">
    <MenubarMenu>
      <PSearch v-model="newsStore.query" class="max-w-52" @keydown.enter="pressEnter" />
      <div class="flex gap-2 items-center">
        <Checkbox id="terms" class="ml-2 h-6 w-6" v-model:checked="newsStore.searchByDate"/>
        <Label v-if="!newsStore.searchByDate">
          Zoek op datum
        </Label>
      </div>
      <PDateRangePicker v-model="dateRange" v-if="newsStore.searchByDate"/>
    </MenubarMenu>
  </Menubar>
</template>

<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
import { format } from 'date-fns'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const pressEnter = () => {
  newsStore.searchNews()
}

const dateRange = computed({
  get: () => newsStore.dateRange,
  set: (newValue) => {
    newsStore.setDateRange(newValue)
  },
})

const newsStore = useNewsStore()
</script>
