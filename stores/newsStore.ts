import { objectToQueryParams } from "@/utils/api-helpers"
import {ref} from 'vue'
import { defineStore } from 'pinia'
// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useNewsStore = defineStore('news', () => {
  const query = ref('Amsterdam')
  const iterator = ref({}) as any
  const newsItems = ref([])
  const radius = ref(5.0)
  const maxNumberOfItems = ref(10)
  const isLoading = ref(false)

  const getNews = async () => {
    if (iterator.value.last) return
    // create request object
    const params = {
      query: query.value,
      radius: radius.value,
      maxNumberOfItems: maxNumberOfItems.value,
      offset: newsItems.value.length
    }
    const request = '/api/getNews' + objectToQueryParams(params)
    isLoading.value = true
    try {
      const response = await $fetch(request)
      console.log(response)
      //@ts-expect-error
      iterator.value = response.iterator
      //@ts-expect-error
      newsItems.value = newsItems.value.concat(response.nieuwsberichten)
    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    query,
    newsItems,
    isLoading,
    getNews
  }
})