import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetcher = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + STRAPI_API_TOKEN
    }
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log("Something went wrong", error);
  }
}
