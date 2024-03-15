import { objectToQueryParams } from "../../utils/api-helpers"
const baseUrl = 'https://api.politie.nl/v4/nieuws'


export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  const url = `${baseUrl}${objectToQueryParams(params)}`

  try {
    const response = await fetch(url)
    return response.json()
    return {}
  }
  catch (error) {
    return {error}
  }
})