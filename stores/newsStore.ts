import { objectToQueryParams } from "@/utils/api-helpers"
import {ref} from 'vue'
import { defineStore } from 'pinia'
// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useNewsStore = defineStore('news', () => {
  const query = ref('Amsterdam')
  const iterator = ref({}) as any
  const newsItem = ref(null)
  const newsItems = ref([])
  const radius = ref(5.0)
  const maxNumberOfItems = ref(10)
  const isLoading = ref(false)

  const debounce = _debounce(() => {
    iterator.value = {}
    newsItems.value = []
    getNews()
  }, 1750)

  watch(query, () => {
    debounce.cancel()
    debounce()  
  })

  const getNews = async () => {
    debounce.cancel()
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

  const getNewsById = async (uid: string) => {
    const request = '/api/getNews' + objectToQueryParams({uid})
    console.log(request)
    isLoading.value = true
    try {
      const response = await $fetch(request)
      //@ts-expect-error
      newsItem.value = response.nieuwsberichten[0]
      console.log(response)
      return response
    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    query,
    newsItem,
    newsItems,
    isLoading,
    iterator,
    getNews,
    getNewsById
  }
})