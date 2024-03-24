import { objectToQueryParams } from "../../utils/api-helpers";
const baseUrl = "https://api.politie.nl/v4/nieuws";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);
  const url = `${baseUrl}${objectToQueryParams(params)}`;
  const response =  await fetch(url);
  if (response.status === 400) {
    console.log('error', response)
    return {
      error: {
        status: response.status,
        statusText: response.statusText,
        title: "Foutmelding",
        description: "Er ging iets mis bij het ophalen van data.",
        type: "error",
      }
    }
  }
  if (response.status === 204) {
    return {
      nieuwsberichten: [],
      iterator: {
        last: true,
        offset: 0
      }
    }
  }
  return response.json()
});
