import { TravelCardProps } from "./travel-data.interface";
import styles from "@/components/ui/travel-data/travel-data.module.css";

const TravelCard = ({ travel, index }: TravelCardProps) => {
  const { title, description, photo_url: photoUrl } = travel;

  const handleDelete = () => {};

  return (
    <article className={styles["travel-card"]}>
      <img src={photoUrl} alt={title} />
      <div className={styles["travel-content"]}>
        <h2>
          <span>{title}</span>
        </h2>
        <p>{description}</p>
        <footer className={styles.actions}>
          <button>See trip details</button>
          <div>
            <button>Edit</button>
            <button className={styles.delete}>Delete</button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default TravelCard;
