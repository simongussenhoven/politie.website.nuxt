<template>
  <AlertDialog :open="alertStore.isOpen" >
    <AlertDialogContent>
      <AlertDialogHeader>
          <AlertDialogTitle>
            {{ alertStore.alert.title }}
          </AlertDialogTitle>
        <AlertDialogDescription v-html="alertStore.alert.description"/>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel v-if="alertStore.alert.type === 'disclaimer'" @click="onClickHideForever">Niet meer laten zien</AlertDialogCancel>
        <AlertDialogAction @click="onClickAccept">{{alertStore.alert.type === 'disclaimer' ? 'Accepteren': 'Ok'}}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import useAlertStore from '../stores/alertStore'

const alertStore = useAlertStore()

const onClickHideForever = () => {
  localStorage.setItem('hasAccepted', 'true')
  onClickAccept()
}

const onClickAccept = () => {
  alertStore.clearAlert()
  alertStore.isOpen = false
}
onMounted(() => {
  if (!localStorage.getItem('hasAccepted')) {
    alertStore.setAlert({
      title: 'Belangrijke waarschuwing',
      description: `Deze website gebruikt data van de open API van de politie.
      Gebruik deze website niet voor officiële doeleinden. 
      Meer info ovoer de API vind je <a href="https://www.politie.nl/binaries/content/assets/politie/onderwerpen/algemeen/politieapi.pdf" 
      target="_blank">hier</a>.`,
      type: 'disclaimer'
    })
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