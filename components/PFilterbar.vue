<template>
  <Menubar class="border-none !h-12">
    <MenubarMenu>
      <!-- <MenubarTrigger>Filters</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent> -->
      <PSearch v-model="newsStore.query" class="max-w-64" @keydown.enter="pressEnter"/>
    </MenubarMenu>
  </Menubar>
</template>

<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
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

const newsStore = useNewsStore()
</script>

