<template>
  <Carousel orientation="vertical">
    <CarouselContent>
      <CarouselItem class="basis-1/3" v-for="img in images"><img :src="img.url" :alt="img.alttext" /></CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
interface IImage {
    alttext: string,
    url:string,
}
  
const props = defineProps<{
  images: IImage[]
}>()

</script>

