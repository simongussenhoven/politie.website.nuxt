<template>
  <Select>
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent class="dark">
      <SelectGroup>
        <SelectItem v-for="option in options" :value="option">
          {{ option }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = withDefaults(defineProps<{
  placeholder: string
  options: string[]
}>(), {
  placeholder: 'Make a selection',
})
</script>