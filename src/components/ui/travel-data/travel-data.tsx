import { TravelCardProps } from "./travel-data.interface";
import styles from "@/components/ui/travel-data/travel-data.module.css";

const TravelCard = ({
  travel,
  index,
  onDelete = () => {},
  onEdit = () => {},
  onSeeTripDetails = () => {},
}: TravelCardProps) => {
  const { title, description, photo_url: photoUrl } = travel;

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
          <button onClick={() => onSeeTripDetails(index)}>
            See trip details
          </button>
          <div>
            <button onClick={() => onDelete(index)}>Edit</button>
            <button className={styles.delete} onClick={() => onEdit(index)}>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default TravelCard;
