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
  <NavigationMenu class="dark min-h-100 min-w-100 border mb-1">
    <NavigationMenuList>
      <!-- <NavigationMenuItem>
        <NavigationMenuTrigger>
          Nieuws
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Vandaag</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem> -->
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
      </NavigationMenuItem>
      <!-- <NavigationMenuItem>
        <NuxtLink to="/gezocht">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Gezochte personen
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem> -->
    </NavigationMenuList>
  </NavigationMenu>
</template>