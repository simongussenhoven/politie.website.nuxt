<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <slot name="title"></slot>
      </CardTitle>
      <CardDescription>
        <slot name="description"></slot>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot name="content"></slot>
    </CardContent>
    <CardFooter>
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