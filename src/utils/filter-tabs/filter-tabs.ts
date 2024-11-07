import { Status, Travel } from "@/components/ui/travel-data/travel-data.type";
import { StatusEnum } from "@/constants/tabs";

export const filterTab = (tab: Status | StatusEnum.ALL, travels: Travel[]) => {
  if (tab === StatusEnum.ALL) return travels;
  return travels.filter((travel) => travel.status === tab);
};
