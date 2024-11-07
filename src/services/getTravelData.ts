import { BASE_URL_VERSION, ENDPOINTS } from "@/config";

export async function getTravelData() {
  const url = BASE_URL_VERSION + ENDPOINTS.TRAVELS;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return [null, data];
  } catch (error) {
    return [404, []];
  }
}
