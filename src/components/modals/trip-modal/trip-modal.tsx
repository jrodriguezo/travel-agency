import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import styles from "@/components/modals/modals.module.css";
import { Input } from "@/components/ui/input";
import { ModalProps } from "@/components/modals/modals.interface";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TripModal({ isOpen, onChangeModal }: ModalProps) {
  return (
    <Modal
      className={styles["base-modal"]}
      overlayClassName={styles["base-overlay"]}
      isOpen={isOpen}
    >
      <header>
        <h2>Create a trip</h2>
        <Button onClick={onChangeModal}>X</Button>
      </header>
      <form>
        <div className={styles.group}>
          <label>Name*</label>
          <Input placeholder="Italy" />
        </div>
        <div className={styles.group}>
          <label>Introduction (max. 240 characters)</label>
          <Textarea placeholder="From Rome to Venice..." />
        </div>
        <div className={styles.group}>
          <label>Description</label>
          <Textarea placeholder="Discover the wonders of the Roman empire..." />
        </div>
        <div className={styles.group}>
          <label>Image</label>
          <Input placeholder="Image URL" />
        </div>
        <section className={styles.group}>
          <label>Day by day itinerary</label>
          <article className={styles.card}>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
            <div className={styles["card-aside"]}>
              <Input placeholder="Location" />
              <Textarea placeholder="Description" />
            </div>
          </article>
        </section>
        <Button className={styles["submit-button"]} type="submit">
          Save
        </Button>
      </form>
    </Modal>
  );
}

export default TripModal;
