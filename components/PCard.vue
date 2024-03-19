<template>
  <Card class="card flex flex-col">
    <div class="card-small-content flex flex-col md:flex-row">
      <slot v-if="$slots.image" name="image" />
      <div class="flex flex-col">
        <CardHeader class="flex flex-col">
          <!-- <slot v-if="$slots.image" name="image" /> -->
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
      </div>
    </div>
    <CardFooter v-if="$slots.footer">
      <slot name="footer"></slot>
    </CardFooter>
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