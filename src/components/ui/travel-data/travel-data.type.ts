export type ItineraryItem = {
  day: number;
  location: string;
  description: string;
};

export type Status = "todo" | "done";

export type Travel = {
  id: number;
  title: string;
  photo_url: string;
  description: string;
  status: Status;
  itinerary: ItineraryItem[];
};
