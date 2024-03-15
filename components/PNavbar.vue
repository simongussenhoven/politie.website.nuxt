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
} from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu class="dark min-h-100 min-w-100 border mb-1">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Nieuws
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Vandaag</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>