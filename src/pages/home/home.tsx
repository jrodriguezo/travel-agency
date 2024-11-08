import TabsHome from "@/components/pages/home/tabs/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TravelCard from "@/components/ui/travel-data/travel-data";
import { Travel } from "@/components/ui/travel-data/travel-data.type";
import { StatusEnum } from "@/constants/tabs";
import styles from "@/pages/home/home.module.css";
import { getTravelData } from "@/services/getTravelData";
import { filterTab } from "@/utils/filter-tabs/filter-tabs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "@/components/icons/loader";
import { filterByText } from "@/utils/filer-by-text/filter-by-text";
import useDebounce from "@/hooks/useDebounce";

function Home() {
  const [activeTab, setActiveTab] = useState(StatusEnum.ALL);
  const [isLoading, setIsLoading] = useState(true);
  const [travels, setTravels] = useState<Travel[]>([]);
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 300);

  const handleTabChange = (value: string) => {
    setActiveTab(value as StatusEnum);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchTravelData = async () => {
      try {
        setIsLoading(true);
        const [error, data] = await getTravelData();
        if (error) throw error;
        setTravels(data);
      } catch (e) {
        toast.error(e?.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchTravelData();
  }, []);

  const travelsToDisplay = filterByText(
    debouncedInputValue,
    filterTab(activeTab, travels)
  );

  return (
    <section className={styles["home-page"]}>
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
            return <TravelCard key={travel.id} travel={travel} />;
          })}
        </section>
      )}
    </section>
  );
}

export default Home;
