<template>
  <div class="loader py-3">
      <div v-show="!isLoading" ref="intersectionElement" />
      <span v-show="isLoading" class="loading-icon">
        <Loader class="size-6 text-muted-foreground" />
      </span>
      <span v-show="isLast">
        <span class="text-muted-foreground">End of list</span>
      </span>
  </div>
</template>

<script lang="ts">
// TODO: convert to setup
import { Loader } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'IntersectionObserverComponent',
  emits: ['intersected'],
  components: {
      Loader
  },
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

<style scoped>
.loader {
  width: 100%;
  min-height: 30px;
}
.loading-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: spin-animation 2s infinite;
}
@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>