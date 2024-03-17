import { objectToQueryParams } from "@/utils/api-helpers"
import {ref} from 'vue'
import { defineStore } from 'pinia'
// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useNewsStore = defineStore('news', () => {
  const query = ref('')
  const iterator = ref(null as IIterator | null)
  const newsItem = ref({} as INewsItem | null)
  const newsItems = ref([] as INewsItem[])

  const regionQuery = ref('Amsterdam')
  const regionIterator = ref(null as IIterator | null)
  const regionalNewsItems = ref([] as INewsItem[])

  const radius = ref(5.0)
  const maxNumberOfItems = ref(10)
  const isLoading = ref(false)

  const debounce = _debounce(() => {
    iterator.value = null
    newsItems.value = []
    getNews()
  }, 1750)

  watch(query, () => {
    debounce.cancel()
    debounce()  
  })

  watch(newsItem, (newItem) => {
    if (!newItem) return
    getRegionalNews()
  })

  const getNews = async () => {
    debounce.cancel()
    if (iterator.value?.last) return
    const params = {
      query: query.value,
      radius: radius.value,
      maxNumberOfItems: maxNumberOfItems.value,
      offset: newsItems.value.length
    }
    const request = '/api/getNews' + objectToQueryParams(params)
    isLoading.value = true
    try {
      const response: any = await $fetch(request)
      iterator.value = response.iterator
      newsItems.value = newsItems.value.concat(response.nieuwsberichten)
    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const getNewsItemById = async (uid: string) => {
    const request = '/api/getNews' + objectToQueryParams({uid})
    isLoading.value = true
    try {
      const response: any = await $fetch(request)
      newsItem.value = response.nieuwsberichten[0]
      return response
    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const getRegionalNews = async () => {
    if (regionIterator.value?.last || !newsItem.value?.gebied) return
    const request = '/api/getNews' + objectToQueryParams({query: newsItem.value.gebied})
    isLoading.value = true
    try {
      const response: any = await $fetch(request)
      iterator.value = response.iterator
      regionalNewsItems.value = regionalNewsItems.value.concat(response.nieuwsberichten)
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
    regionQuery,
    regionIterator,
    regionalNewsItems,
    isLoading,
    iterator,
    getNews,
    getNewsItemById,
    getRegionalNews
  }
})