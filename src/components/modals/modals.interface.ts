import { Travel } from "@/components/ui/travel-data/travel-data.type";

export interface ModalProps {
  isOpen?: boolean;
  onChangeModal?: React.MouseEventHandler<HTMLButtonElement>;
  onCallbackSubmit?: (value: Travel) => void;
}
