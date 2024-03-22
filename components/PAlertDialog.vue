<template>
  <AlertDialog :open="alertStore.isOpen" >
    <AlertDialogContent>
      <AlertDialogHeader>
          <AlertDialogTitle>
            {{ alertStore.title }}
          </AlertDialogTitle>
        <AlertDialogDescription v-html="alertStore.description"/>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <!-- <AlertDialogCancel>Cancel</AlertDialogCancel> -->
        <AlertDialogAction @click="onClickAccept">Accepteren</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import useAlertStore from '../stores/alertStore'
const alertStore = useAlertStore()
const isOpen = computed(() => alertStore.isOpen)
const onClickAccept = () => {
  alertStore.isOpen = false
  localStorage.setItem('hasAccepted', 'true')
}
onMounted(() => {
  if (!localStorage.getItem('hasAccepted')) {
    alertStore.isOpen = true
  }
})
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
</script>