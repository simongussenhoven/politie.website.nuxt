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

<template>
  <NavigationMenu class="nav min-w-full mb-1 flex justify-start">
    <NavigationMenuList>
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
      <PThemeSelector/>
    </NavigationMenuList>
  </NavigationMenu>
</template>
