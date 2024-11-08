import Logo from "@/components/icons/logo";
import TripModal from "@/components/modals/trip-modal/trip-modal";
import { Button } from "@/components/ui/button";
import styles from "@/components/ui/header/header.module.css";
import { useState } from "react";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onChangeModal = () => setIsOpenModal((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <Button onClick={onChangeModal} variant="secondary">
          Create a new trip
        </Button>
      </div>
      <TripModal isOpen={isOpenModal} onChangeModal={onChangeModal} />
    </header>
  );
}

export default Header;
