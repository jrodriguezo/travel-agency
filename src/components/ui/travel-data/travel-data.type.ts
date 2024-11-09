import { StatusEnum } from "@/constants/tabs";

export type Id = number;
export type Title = string;
export type PhotoUrl = string;
export type Description = string;
export type Day = number;
export type Location = string;

export type ItineraryItem = {
  day: Day;
  location: Location;
  description: Description;
};

export type Status = StatusEnum.TODO | StatusEnum.DONE;

export type Travel = {
  id: Id;
  title: Title;
  photo_url: PhotoUrl;
  description: Description;
  status: Status;
  itinerary: ItineraryItem[];
};
