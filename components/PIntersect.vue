<template>
  <div class="loader py-3 flex justify-center">
      <div v-show="!isLoading" ref="intersectionElement" />
      <span v-show="isLoading" class="loading-icon">
        <PLoader/>
      </span>
      <span v-show="isLast">
        <span class="text-muted-foreground">Einde van de lijst | <span @click="$emit('clearFilters')">Filters uitzetten</span> | <span @click="$emit('findMore')">Zoek verder terug</span></span>
      </span>
  </div>
</template>

<script lang="ts">
// TODO: convert to setup
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'IntersectionObserverComponent',
  emits: ['intersected', 'clearFilters', 'findMore'],
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
      },
      hasFilters: {
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
                  if(props.isLoading || props.hasFilters) return;
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