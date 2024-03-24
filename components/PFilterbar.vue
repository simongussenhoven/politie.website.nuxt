<template>
  <Menubar class="border-none !h-12">
    <MenubarMenu>
      <PSearch v-model="newsStore.query" class="max-w-64" @keydown.enter="pressEnter"/>
      <PDateRangePicker v-model="dateRange"/>
    </MenubarMenu>
  </Menubar>
</template>

<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
import {format} from 'date-fns'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'

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

