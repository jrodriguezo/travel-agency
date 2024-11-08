import { Travel } from "./travel-data.type";

export interface TravelCardProps {
  travel: Travel;
  index: number;
  onDelete?: (index: number) => void;
  onEdit?: (index: number) => void;
  onSeeTripDetails?: (index: number) => void;
}
