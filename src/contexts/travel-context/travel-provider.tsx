import React, { useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import { Travel } from "@/components/ui/travel-data/travel-data.type";
import { getTravelData } from "@/services/getTravelData";
import { TravelContext } from "@/contexts/travel-context/travel-context";

export const TravelProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTravelData = async () => {
      try {
        setIsLoading(true);
        const [error, data] = await getTravelData();
        if (error) throw error;
        setTravels(data);
      } catch (e) {
        toast.error(e?.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchTravelData();
  }, []);

  return (
    <TravelContext.Provider
      value={{
        isLoading,
        onChangeIsLoading: setIsLoading,
        onChangeTravels: setTravels,
        travels,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
