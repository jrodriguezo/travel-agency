import { Props } from "@/models/props";

export interface TabsHomeProps extends Pick<Props, "className"> {
  currentTab: string; // valor actual de la pestaña
  onTabChange: (value: string) => void; // callback para manejar los cambios
}
