import { FormData as BackendData } from "@/components/modals/trip-modal/trip-modal";
import { BASE_URL_VERSION, ENDPOINTS } from "@/config";

const parseData = (data: BackendData[]) => {
  return data.map((trip, index) => {
    // eslint-disable-next-line
    const { id, ...restOfTrip } = trip;
    return { id: index, ...restOfTrip };
  });
};

export async function getTravelData() {
  const url = BASE_URL_VERSION + ENDPOINTS.TRAVELS;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return [null, parseData(data)];
  } catch (error) {
    return [404, []];
  }
}
