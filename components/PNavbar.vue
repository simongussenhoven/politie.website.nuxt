<template>
  <NavigationMenu class="nav min-w-full sticky top-0">
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
</script>

<style lang="scss" scoped>
.nav {
  :deep(>div){
    min-width: 100%;
  }
}
</style>