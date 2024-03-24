import { objectToQueryParams } from "@/utils/api-helpers";
import { ref } from "vue";
import { defineStore } from "pinia";
import useAlertStore from "./alertStore";
import { format, subDays, subWeeks } from "date-fns";

export const useNewsStore = defineStore("news", () => {

  const alertStore = useAlertStore();
  const alert = computed(() => alertStore.alert);
  const lastFetch = ref(new Date().getTime()); 
  
  const query = ref("");
  const dateRange = ref({ start: subDays(new Date(), 1), end: new Date()})
  const hasFilters = computed(() => !!query.value)

  const iterator = ref({last: false, offset: 0} as IIterator);
  const newsItem = ref({} as INewsItem | null);
  const newsItems = ref([] as INewsItem[]);
  const radius = ref(5.0);
  const maxNumberOfItems = ref(10);
  const isLoading = ref(false);

  const resetStore = () => {
    query.value = "";
    dateRange.value = { start: new Date(), end: new Date() };
    iterator.value = { last: false, offset: 0 };
    newsItem.value = null;
    newsItems.value = [];
    radius.value = 5.0;
    maxNumberOfItems.value = 10;
    isLoading.value = false;
    getNews();
  }
  const findMore = () => {
    dateRange.value.start = subWeeks(dateRange.value.start, 1)
    searchNews()
  }
  // watch(lastFetch, () => {
  //   if (new Date().getTime() - lastFetch.value < 200) {
  //     alertStore.setAlert({
  //       title: "Timeout",
  //       description: "Te veel verzoeken",
  //       type: "error",
  //     });
  //   }
  // })
  const clearFilters = () => {
    query.value = "";
    dateRange.value = { start: new Date(), end: new Date() };
    resetIterator()
    newsItems.value = [];
    getNews();
  }
  const debounce = _debounce(() => {
    searchNews();
  }, 1750);

  watch(query, () => {
    debounce.cancel();
    debounce();
  });

  // try to load again after error was cleared
  watch(alert.value, () => {
    if (alert.value.title !== "") {
      resetStore()
    };
  });

  const resetIterator = () => {
    iterator.value = {
      last: false,
      offset: 0,
    }
  }
  const setDateRange = (range: {start:Date, end: Date}) => {
    dateRange.value = range;
    resetIterator()
    newsItems.value = [];
    getNews();
  }
  const searchNews = () => {
    debounce.cancel();
    resetIterator()
    newsItems.value = [];
    getNews();
  };

  const setStartDate= (date: string) => {
    if (dateRange.value.end < new Date(date)) {
      dateRange.value.end = new Date(date)
    }
    if(iterator.value.last) {
      dateRange.value.start = subWeeks(new Date(date), 1)
      iterator.value.last = false
    }
  }
  const getNewsByScrolling = () => {
    if (newsItems.value.length) {
      setStartDate(newsItems.value[newsItems.value.length - 1].publicatiedatum)
    }
    getNews();
  }

  const getNews = async () => {
    debounce.cancel();
    if (iterator.value.last || alert.value.title || isLoading.value) return;
    isLoading.value = true;

    // create request
    const request =
      "/api/getNews" +
      objectToQueryParams({
        query: query.value,
        radius: radius.value,
        maxNumberOfItems: maxNumberOfItems.value,
        offset: iterator.value.offset,
        fromdate: format(dateRange.value.start, "yyyyMMdd"),
        todate: format(dateRange.value.end, "yyyyMMdd"),
      });

    // get and catch error
    const response: any = await $fetch(request)
    if (response.error) {
      alertStore.setAlert(response.error);
      return
    }
    // set values
    iterator.value = {
      last: response.iterator.last,
      offset: response.iterator.offset + maxNumberOfItems.value
    }
    newsItems.value = newsItems.value.concat(response.nieuwsberichten);
    lastFetch.value = new Date().getTime();
    isLoading.value = false;
  };

  const getNewsItemById = async (uid: string) => {
    const request = "/api/getNews" + objectToQueryParams({ uid });
    isLoading.value = true;
    try {
      const response: any = await $fetch(request);
      newsItem.value = response.nieuwsberichten[0];
      return response;
    } catch (error) {
      console.error(error);
      alertStore.setAlert(error);
    } finally {
      isLoading.value = false;
    }
  };


  return {
    alert,
    query,
    dateRange,
    newsItem,
    newsItems,
    isLoading,
    iterator,
    hasFilters,
    findMore,
    clearFilters,
    getNews,
    getNewsByScrolling,
    getNewsItemById,
    searchNews,
    setDateRange
  };
});
