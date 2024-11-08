import { createContext } from "react";
import { Travel } from "@/components/ui/travel-data/travel-data.type";

interface TravelContextType {
  travels: Travel[];
  onChangeTravels: React.Dispatch<React.SetStateAction<Travel[]>>;
  isLoading: boolean;
  onChangeIsLoading: (value: boolean) => void;
}

export const TravelContext = createContext<TravelContextType | undefined>(
  undefined
);
