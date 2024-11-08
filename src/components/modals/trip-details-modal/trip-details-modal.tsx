import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import { ModalProps } from "@/components/modals/modals.interface";
import { Travel } from "@/components/ui/travel-data/travel-data.type";
import classNames from "classnames";
import specificStyles from "@/components/modals/trip-details-modal/trip-details-modal.module.css";
import styles from "@/components/modals/modals.module.css";

interface TripDetailsModalProps extends ModalProps {
  travel?: Travel;
}

function TripDetailsModal({
  isOpen,
  onChangeModal,
  travel,
}: TripDetailsModalProps) {
  if (travel == null) return;

  const { title, description, photo_url: photoUrl } = travel;

  return (
    <Modal
      className={classNames(
        styles["base-modal"],
        specificStyles["trip-details"]
      )}
      overlayClassName={styles["base-overlay"]}
      isOpen={isOpen}
    >
      <div className={specificStyles.content}>
        <header className={specificStyles.header}>
          <img
            className={specificStyles.image}
            src={
              photoUrl ||
              "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
            }
            alt={title}
          />
          <Button onClick={onChangeModal}>X</Button>
        </header>
        <section>
          <h2>{title}</h2>
          <p>{description}</p>
        </section>
      </div>
    </Modal>
  );
}

export default TripDetailsModal;
