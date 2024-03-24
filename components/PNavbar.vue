<template>
  <div class="sticky bottom-0 md:bottom-auto md:top-0 bg-white dark:bg-slate-950 py-2">
  <NavigationMenu class="nav min-w-full py-2">
    <NavigationMenuList class="flex justify-between">
      <div class="flex flex-row">
        <NavigationMenuItem>
        <NuxtLink to="/">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Nieuws
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink to="/vermist">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Vermiste personen
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem class="self-end">
      </div>
      <PThemeSelector/>
    </NavigationMenuList>
  </NavigationMenu>
  <PFilterbar/>
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { useNewsStore } from '@/stores/newsStore'
const newsStore = useNewsStore()
</script>

<style lang="scss" scoped>
.nav {
  :deep(>div){
    min-width: 100%;
  }
}
</style>