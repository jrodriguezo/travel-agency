import {
  Id,
  Travel,
  Description,
  Day,
  Location,
  Title,
  PhotoUrl,
  Status,
} from "./travel-data.type";

export interface TravelCardProps {
  travel: Travel;
  index: Id;
  onDelete?: (index: Id) => void;
  onEdit?: (index: Id) => void;
  onSeeTripDetails?: (index: Id) => void;
}

export interface ItineraryItem {
  day: Day;
  location: Location;
  description: Description;
}

export type Travel = {
  id: Id;
  title: Title;
  photo_url: PhotoUrl;
  description: Description;
  status: Status;
  itinerary: ItineraryItem[];
};
