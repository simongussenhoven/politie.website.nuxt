import { objectToQueryParams } from "../../utils/api-helpers"
const baseUrl = 'https://api.politie.nl/v4/nieuws'


export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  const url = `${baseUrl}${objectToQueryParams(params)}`

  try {
    return (await fetch(url)).json()
  }
  catch (error) {
    return {error}
  }
})