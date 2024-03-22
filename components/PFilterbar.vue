<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Filters</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
      <PSearch v-model="newsStore.query"/>
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

const newsStore = useNewsStore()
</script>

