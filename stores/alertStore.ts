export default defineStore('alert', () => {
  const title = ref('Waarschuwing')
  const description = ref(
    `Deze website gebruikt data van de open API van de politie.
    Gebruik deze website niet voor officiële doeleinden. 
    Meer info ovoer de API vind je <a href="https://www.politie.nl/binaries/content/assets/politie/onderwerpen/algemeen/politieapi.pdf" 
    target="_blank">hier</a>.`)
  const isOpen = ref(false)
  return {
    title,
    description,
    isOpen
  }
})