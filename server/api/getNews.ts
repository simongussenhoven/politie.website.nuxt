import { objectToQueryParams } from "../../utils/api-helpers"
const baseUrl = 'https://api.politie.nl/v4/nieuws'


export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  return await $fetch(baseUrl + objectToQueryParams(params))
})