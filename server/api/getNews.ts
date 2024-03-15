import { objectToQueryParams } from "../../utils/api-helpers"
const baseUrl = 'https://api.politie.nl/v4/nieuws'


export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  try {
    const response = await fetch(`${baseUrl}?${objectToQueryParams(params)}`)
    return response.json()
  }
  catch (error) {
    return {error}
  }
})