<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="'outline'"
        :class="cn(
          'w-[200px] justify-start text-left font-normal',
          !date && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        <span>{{ date ? format(date, "PPP", {locale: nl}) : placeholder }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0 dark">
      <Calendar v-model="date" />
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { nl } from 'date-fns/locale'
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue: Date | null,
  placeholder?: string
}>(), {
  placeholder: 'Kies een datum'
})

watch(() => props.modelValue, (newValue) => {
  if (!props.modelValue) return
  
  date.value = newValue
})

const date = ref<Date | null>()

watch(date, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
