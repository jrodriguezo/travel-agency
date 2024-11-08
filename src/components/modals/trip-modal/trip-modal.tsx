import Modal from "react-modal";
import { useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import { Travel } from "@/components/ui/travel-data/travel-data.type";

interface ItineraryItem {
  day: number;
  location: string;
  description: string;
}
interface FormData {
  id?: number;
  title: string;
  introduction: string;
  description: string;
  image: string;
  itinerary: ItineraryItem[];
}

function TripModal({
  isOpen,
  onChangeModal,
  onCallbackSubmit = () => {},
}: ModalProps) {
  const { control, handleSubmit, reset } = useForm<FormData>();

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [location, setLocation] = useState("");
  const [itineraryDescription, setItineraryDescription] = useState("");

  const onSubmit = (data: FormData) => {
    const travel: Travel = {
      id: 0,
      title: data.title,
      description: data.description,
      photo_url: data.image,
      status: "todo",
      itinerary:
        selectedDay && location && itineraryDescription
          ? [{ day: selectedDay, location, description: itineraryDescription }]
          : [],
    };

    onCallbackSubmit(travel);

    reset();

    setLocation("");
    setItineraryDescription("");
    setSelectedDay(null);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.group}>
          <label>Name*</label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => <Input placeholder="Italy" {...field} />}
          />
        </div>
        <div className={styles.group}>
          <label>Introduction (max. 240 characters)</label>
          <Controller
            name="introduction"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea placeholder="From Rome to Venice..." {...field} />
            )}
          />
        </div>
        <div className={styles.group}>
          <label>Description</label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea
                placeholder="Discover the wonders of the Roman empire..."
                {...field}
              />
            )}
          />
        </div>
        <div className={styles.group}>
          <label>Image</label>
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field }) => <Input placeholder="Image URL" {...field} />}
          />
        </div>
        <section className={styles.group}>
          <label>Day by day itinerary</label>
          <article className={styles.card}>
            <Select
              onValueChange={(value) => setSelectedDay(Number(value))}
              value={selectedDay?.toString() || ""}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"1"}>1</SelectItem>
                <SelectItem value={"2"}>2</SelectItem>
                <SelectItem value={"3"}>3</SelectItem>
              </SelectContent>
            </Select>
            <div className={styles["card-aside"]}>
              <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Textarea
                placeholder="Description"
                value={itineraryDescription}
                onChange={(e) => setItineraryDescription(e.target.value)}
              />
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
