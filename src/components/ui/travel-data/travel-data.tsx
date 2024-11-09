import { TravelCardProps } from "./travel-data.interface";
import styles from "@/components/ui/travel-data/travel-data.module.css";

const BUTTONS = {
  EDIT: "Edit",
  DELETE: "Delete",
  SEE_TRIPS: "See trip details",
};

const TravelCard = ({
  travel,
  onDelete = () => {},
  onEdit = () => {},
  onSeeTripDetails = () => {},
}: TravelCardProps) => {
  const { id, title, description, photo_url: photoUrl } = travel;

  return (
    <article className={styles["travel-card"]}>
      <img
        src={
          photoUrl ||
          "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
        }
        alt={title}
      />
      <div className={styles["travel-content"]}>
        <h2>
          <span>{title || "Title"}</span>
        </h2>
        <p>{description || "No description"}</p>
        <footer className={styles.actions}>
          <button onClick={() => onSeeTripDetails(id)}>
            {BUTTONS.SEE_TRIPS}
          </button>
          <div>
            <button onClick={() => onEdit(id)}>{BUTTONS.EDIT}</button>
            <button className={styles.delete} onClick={() => onDelete(id)}>
              {BUTTONS.DELETE}
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default TravelCard;
