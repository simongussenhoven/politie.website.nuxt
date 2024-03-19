<template>
  <div class="loader py-3">
      <div v-show="!isLoading" ref="intersectionElement" />
      <span v-show="isLoading" class="loading-icon">
        <PLoader/>
      </span>
      <span v-show="isLast">
        <span class="text-muted-foreground">End of list</span>
      </span>
  </div>
</template>

<script lang="ts">
// TODO: convert to setup
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'IntersectionObserverComponent',
  emits: ['intersected'],
  props: {
      options: {
          type: Object,
          default: () => ({}),
      },
      isLoading: {
          type: Boolean,
          default: false,
      },
      isLast: {
          type: Boolean,
          default: false
      }
  },
  setup(props, { emit }) {
      const intersectionElement = ref(null);
      let intersectionObserver = null as any;
      const handleIntersection = (entries: any) => {
          entries.forEach((entry: any) => {
              if (entry.isIntersecting) {
                  // Element is intersecting, emit the "intersected" event
                  if(props.isLoading) return;
                  emit('intersected');
              }
          });
      };
      onMounted(() => {
          // Create Intersection Observer
          intersectionObserver = new IntersectionObserver(handleIntersection, props.options);
          // Start observing the element
          intersectionObserver.observe(intersectionElement.value);
      });
      onUnmounted(() => {
          // Stop observing when the component is unmounted
          if (intersectionObserver) {
              intersectionObserver.disconnect();
          }
      });
      return {
          intersectionElement,
      };
  },
};
</script>