import { objectToQueryParams } from "@/utils/api-helpers"
import {ref} from 'vue'
import { defineStore } from 'pinia'
// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useMissingStore = defineStore('missing', () => {
  const query = ref('')
  const iterator = ref(null as IIterator | null)

  const missingPerson = ref({} as IMissingPerson | null)
  const missingPersons = ref([] as IMissingPerson[])

  const isLoading = ref(false)
  // const debounce = _debounce(() => {
  //   iterator.value = null
  //   newsItems.value = []
  //   getNews()
  // }, 1750)

  // watch(query, () => {
  //   debounce.cancel()
  //   debounce()  
  // })

  // watch(newsItem, (newItem) => {
  //   if (!newItem) return
  //   getRegionalNews()
  // })

  const getMissing = async () => {
    // debounce.cancel()
    if (iterator.value?.last) return
    const params = {
      query: query.value,
      // radius: radius.value,
      // maxNumberOfItems: maxNumberOfItems.value,
      offset: missingPersons.value.length
    }
    const request = '/api/getMissing' + objectToQueryParams(params)
    isLoading.value = true
    try {
      const response: any = await $fetch(request)
      console.log(response)
      iterator.value = response.iterator
      missingPersons.value = missingPersons.value.concat(response.vermisten)
    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const getMissingPersonById = async (uid: string) => {
    const request = '/api/getMissing' + objectToQueryParams({uid})
    isLoading.value = true
    try {
      const response: any = await $fetch(request)
      missingPerson.value = response.vermisten[0]
      return response
    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  // const getRegionalNews = async () => {
  //   if (regionIterator.value?.last || !newsItem.value?.gebied) return
  //   const request = '/api/getNews' + objectToQueryParams({query: newsItem.value.gebied})
  //   isLoading.value = true
  //   try {
  //     const response: any = await $fetch(request)
  //     iterator.value = response.iterator
  //     regionalNewsItems.value = regionalNewsItems.value.concat(response.nieuwsberichten)
  //   } catch(error) {
  //     console.error(error)
  //   } finally {
  //     isLoading.value = false
  //   }
  // }

  return {
    query,
    missingPerson,
    missingPersons,
    // regionQuery,
    // regionIterator,
    // regionalNewsItems,
    isLoading,
    iterator,
    getMissing,
    getMissingPersonById
    // getNewsItemById,
    // getRegionalNews
  }
})