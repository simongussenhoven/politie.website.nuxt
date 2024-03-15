<template>
  <Card class="flex flex-col md:flex-row">
    <slot v-if="$slots.image" name="image">
    </slot>
    <div class="flex-col">
      <CardHeader>
      <CardTitle v-if="$slots.title">
        <slot name="title"></slot>
      </CardTitle>
      <CardDescription v-if="$slots.description">
        <slot name="description"></slot>
      </CardDescription>
    </CardHeader>
    <CardContent v-if="$slots.content">
      <slot name="content"></slot>
    </CardContent>
    <CardFooter v-if="$slots.footer">
      <slot name="footer"></slot>
    </CardFooter>
    <div class="error" v-if="$slots.error">
      <slot name="error"></slot>
    </div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>