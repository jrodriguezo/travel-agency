export type Id = number;
export type Title = string;
export type PhotoUrl = string;
export type Description = string;
export type Day = string;
export type Location = string;

export type ItineraryItem = {
  day: Day;
  location: Location;
  description: Description;
};

export type Status = "todo" | "done";

export type Travel = {
  id: Id;
  title: Title;
  photo_url: PhotoUrl;
  description: Description;
  status: Status;
  itinerary: ItineraryItem[];
};
