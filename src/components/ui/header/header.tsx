import Logo from "@/components/icons/logo";
import TripModal from "@/components/modals/trip-modal/trip-modal";
import { Button } from "@/components/ui/button";
import styles from "@/components/ui/header/header.module.css";
import { useState } from "react";
import { Travel } from "@/components/ui/travel-data/travel-data.type";
import { useTravelContext } from "@/contexts/travel-context/useTravelContext";

function Header() {
  const { onChangeTravels } = useTravelContext();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onChangeModal = () => setIsOpenModal((prev) => !prev);

  const handleSubmit = (travel: Travel) => {
    onChangeTravels((prev) => [...prev, travel]);
    onChangeModal();
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <Button onClick={onChangeModal} variant="secondary">
          Create a new trip
        </Button>
      </div>
      <TripModal
        isOpen={isOpenModal}
        onChangeModal={onChangeModal}
        onCallbackSubmit={handleSubmit}
      />
    </header>
  );
}

export default Header;
