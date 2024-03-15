import { objectToQueryParams } from "@/utils/api-helpers"
import {ref} from 'vue'
import { defineStore } from 'pinia'
// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useNewsStore = defineStore('news', () => {
  const query = ref('Amsterdam')
  const iterator = ref({} as IIterator)
  const newsItems = ref([] as INewsItem[])
  const radius = ref(5.0)
  const maxNumberOfItems = ref(10)
  const offset = ref(0)

  const getNews = async () => {
    if (iterator.value.last) return
    // create request object
    const request = {
      query: query.value,
      radius: radius.value,
      maxNumberOfItems: maxNumberOfItems.value,
      offset: newsItems.value.length
    }

    try {
      const response: INewsResponse = await $fetch(`api/getNews${objectToQueryParams(request)}`, {
        method: 'GET',
      })
      iterator.value = response.iterator
      newsItems.value = [...newsItems.value, ...response.nieuwsberichten]
    } catch (error) {
      console.error(error)
    }
  }

  return {
    query,
    newsItems,
    getNews
  }
})