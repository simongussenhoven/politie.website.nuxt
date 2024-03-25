import { objectToQueryParams } from "@/utils/api-helpers";
import { ref } from "vue";
import { defineStore } from "pinia";
import useAlertStore from "./alertStore";
import { format, subDays, subWeeks } from "date-fns";
import { get } from "@vueuse/core";

export const useNewsStore = defineStore("news", () => {
  const query = ref("");
  const lastFetch = ref(new Date().getTime()); 
  const hasFilters = computed(() => !!query.value)

  const dateRange = ref({ start: subWeeks(new Date(), 1), end: new Date()})
  const dateRangeModifier = ref('scroller')
  const searchByDate = ref(false)

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
    searchByDate.value = false;
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

  watch(() => searchByDate, () => {
    dateRange.value = { start: subWeeks(new Date(), 1), end: new Date() }
    getNews()
  })

  const clearFilters = () => {
    query.value = "";
    dateRange.value = { start: new Date(), end: new Date() };
    resetIterator()
    newsItems.value = [];
    getNews();
  }

  // watch the query, debounce the search
 
  const debounce = _debounce(() => {
    searchNews();
  }, 1750);
  watch(query, () => {
    debounce.cancel();
    debounce();
  });

  // watch the date range, search if changed


  const setDateRange = (range: {start:Date, end: Date}) => {
    dateRangeModifier.value = 'datePicker'
    dateRange.value = range;
    resetIterator()
    newsItems.value = [];
    getNews();
  }

  // watch the alert, retry load if closed
  const alertStore = useAlertStore();
  const alert = computed(() => alertStore.alert);
  watch(alert.value, () => {
    if (alert.value.title !== "") {
      resetStore()
    };
    searchNews();
  });

  const resetIterator = () => {
    iterator.value = {
      last: false,
      offset: 0,
    }
  }

  const searchNews = () => {
    debounce.cancel();
    resetIterator()
    newsItems.value = [];
    getNews();
  };

  const setStartDate= (date: string) => {
    if(iterator.value.last) {
      dateRange.value.start = subWeeks(new Date(date), 1)
      iterator.value.last = false
    }
  }
  const getNewsByScrolling = () => {
    if (newsItems.value.length) {
      setStartDate(newsItems.value[newsItems.value.length - 1].publicatiedatum)
    }
    dateRangeModifier.value = 'scroller'
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
        todate: format(dateRange.value.end, "yyyyMMdd")
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
    searchByDate,
    findMore,
    clearFilters,
    getNews,
    getNewsByScrolling,
    getNewsItemById,
    searchNews,
    setDateRange
  };
});
