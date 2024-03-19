<template>
  <div class="simple-carousel relative flex border">
      <Button class="chevron w-12 absolute flex justify-center top-1/2 transform -translate-y-1/2 left-2 opacity-60" @click="onClickChevron(-1)">
        <ChevronLeft />
      </Button>
    <div class="image w-full flex justify-center items-center">
      <img class="max-h-72 md:max-h-96" v-for="(img, index) in props.images" :key="index" :src="img.url" :alt="img.alttext" :class="{hidden: index !== selectedIndex}"/>
    </div>
    <div>
      <Button class="chevron w-12 absolute flex justify-center top-1/2 transform -translate-y-1/2 right-2 opacity-60" @click="onClickChevron(1)">
        <ChevronRight />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref, defineProps } from 'vue'

interface IImage {
    alttext: string,
    url:string,
}
const selectedIndex = ref(0)

const onClickChevron = (direction: number) => {
  selectedIndex.value =
    (selectedIndex.value + direction + props.images.length) % props.images.length
}

const props = defineProps<{
  images: IImage[]
}>()
</script>