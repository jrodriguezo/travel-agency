import TabsHome from "@/components/pages/home/tabs/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TravelCard from "@/components/ui/travel-data/travel-data";
import { StatusEnum } from "@/constants/tabs";
import styles from "@/pages/home/home.module.css";
import { filterTab } from "@/utils/filter-tabs/filter-tabs";
import { useState } from "react";
import Loader from "@/components/icons/loader";
import { filterByText } from "@/utils/filer-by-text/filter-by-text";
import useDebounce from "@/hooks/useDebounce";
import { v4 as uuidv4 } from "uuid";
import { useTravelContext } from "@/contexts/travel-context/useTravelContext";

function Home() {
  const [activeTab, setActiveTab] = useState(StatusEnum.ALL);
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 300);
  const { travels, isLoading } = useTravelContext();

  const handleTabChange = (value: string) => {
    setActiveTab(value as StatusEnum);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

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
            return <TravelCard key={uuidv4()} travel={travel} />;
          })}
        </section>
      )}
    </section>
  );
}

export default Home;
