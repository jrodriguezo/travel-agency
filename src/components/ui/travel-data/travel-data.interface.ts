import { Id, Travel } from "./travel-data.type";

export interface TravelCardProps {
  travel: Travel;
  index: Id;
  onDelete?: (index: Id) => void;
  onEdit?: (index: Id) => void;
  onSeeTripDetails?: (index: Id) => void;
}
