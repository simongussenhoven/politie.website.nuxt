export default defineStore('alert', () => {
  const alert = ref({
    title: ref(''),
    description: ref(''),
    type: ref('')
  })
  const isOpen = ref(false)

  const clearAlert = () => {
    isOpen.value = false
    alert.value.title = ''
    alert.value.description = ''
    alert.value.type = ''
  }
  const defaultError = {
    title: 'Foutmelding',
    description: 'Er ging iets mis bij het ophalen van data.',
    type: 'error'
  }
  const setAlert = (error?: any) => {
    isOpen.value = true
    alert.value.title = error.title ?? defaultError.title
    alert.value.description = error.description ?? defaultError.description
    alert.value.type = error.type ?? defaultError.type
  }
  return {
    alert,
    isOpen,
    clearAlert,
    setAlert
  }
})