import { useNewsStore } from "./newsStore";

export const useNewsRegionalStore = defineStore("newsRegional", () => {
  const newsStore = useNewsStore();
  const newsItem = computed(() => newsStore.newsItem);

  const query = ref("");
  const iterator = ref(null as IIterator | null);
  const regionalNewsItems = ref([] as INewsItem[]);
  const isLoading = ref(false);

  watch(newsItem, () => {
    if (newsItem.value?.gebied) {
      resetRegionalNews();
      getRegionalNews();
    }
  })

  const getRegionalNews = async () => {
    if (iterator.value?.last || !newsItem.value?.gebied) return;
    const request =
      "/api/getNews" + objectToQueryParams({ query: newsItem.value.gebied });
    isLoading.value = true;
    try {
      const response: any = await $fetch(request);
      iterator.value = response.iterator;
      regionalNewsItems.value = regionalNewsItems.value.concat(
        response.nieuwsberichten
      );
      return;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const resetRegionalNews = () => {
    iterator.value = null;
    regionalNewsItems.value = [];
  };

  return {
    query,
    regionalNewsItems,
    isLoading,
    iterator,
    getRegionalNews,
    resetRegionalNews,
  }
})