import TabsHome from "@/components/pages/home/tabs/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TravelCard from "@/components/ui/travel-data/travel-data";
import { StatusEnum } from "@/constants/tabs";
import { filterTab } from "@/utils/filter-tabs/filter-tabs";
import { useState } from "react";
import Loader from "@/components/icons/loader";
import { filterByText } from "@/utils/filer-by-text/filter-by-text";
import useDebounce from "@/hooks/useDebounce";
import { v4 as uuidv4 } from "uuid";
import { useTravelContext } from "@/contexts/travel-context/useTravelContext";
import styles from "@/pages/home/home.module.css";
import TripDetailsModal from "@/components/modals/trip-details-modal/trip-details-modal";

function Home() {
  const [activeTab, setActiveTab] = useState(StatusEnum.ALL);
  const [inputValue, setInputValue] = useState("");
  const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false);
  const debouncedInputValue = useDebounce(inputValue, 300);
  const { travels, isLoading, onChangeTravels } = useTravelContext();
  const [currentTravelIndex, setCurrentTravelIndex] = useState<
    number | undefined
  >(undefined);

  const onChangeDetailsModal = () => setIsOpenDetailsModal((prev) => !prev);

  const handleTabChange = (value: string) => {
    setActiveTab(value as StatusEnum);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index: number) => {
    onChangeTravels((travels) =>
      travels.filter((travel) => travel.id !== index)
    );
  };

  const handleDetails = (index: number) => {
    setCurrentTravelIndex(index);
    onChangeDetailsModal();
  };

  const travelsToDisplay = filterByText(
    debouncedInputValue,
    filterTab(activeTab, travels)
  );

  return (
    <section className={styles["home-page"]}>
      <TripDetailsModal
        travel={
          currentTravelIndex != null
            ? travels.find((trip) => trip.id === currentTravelIndex)
            : undefined
        }
        isOpen={isOpenDetailsModal}
        onChangeModal={onChangeDetailsModal}
      />
      <header>
        <h1>
          <span>The places you dream of</span>
        </h1>
        <h2>Let's live new adventures</h2>
      </header>
      <form className="primary-input" onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="Search trips"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button>Search</Button>
      </form>
      <TabsHome
        currentTab={activeTab}
        onTabChange={handleTabChange}
        className={styles.tabs}
      />
      {isLoading && <Loader className={styles.loader} />}
      {!isLoading && (
        <section className={styles.travel}>
          {travelsToDisplay.map((travel) => {
            return (
              <TravelCard
                onSeeTripDetails={handleDetails}
                onDelete={handleDelete}
                key={travel.id}
                travel={travel}
              />
            );
          })}
        </section>
      )}
    </section>
  );
}

export default Home;
