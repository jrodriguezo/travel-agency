import { TravelContext } from "@/contexts/travel-context/travel-context";
import { useContext } from "react";

export const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error("useTravelContext must be used within a TravelProvider");
  }
  return context;
};
