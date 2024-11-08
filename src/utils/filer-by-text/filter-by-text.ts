import { Travel } from "@/components/ui/travel-data/travel-data.type";

const compare = (text: string, search: string) => {
  if (typeof text !== "string") return false;
  if (typeof search !== "string") return false;
  return text.toLowerCase().includes(search.toLowerCase());
};

export const filterByText = (text: string, travels: Travel[]) => {
  if (typeof text === "string" && text.length === 0) return travels;

  return travels.filter(
    (travel) => compare(travel.title, text) || compare(travel.description, text)
  );
};
