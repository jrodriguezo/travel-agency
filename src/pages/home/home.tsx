import TabsHome from "@/components/pages/home/tabs/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TravelCard from "@/components/ui/travel-data/travel-data";
import { Travel } from "@/components/ui/travel-data/travel-data.type";
import styles from "@/pages/home/home.module.css";
import { getTravelData } from "@/services/getTravelData";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [travels, setTravels] = useState<Travel[]>([]);

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

  return (
    <section className={styles["home-page"]}>
      <header>
        <h1>
          <span>The places you dream of</span>
        </h1>
        <h2>Let's live new adventures</h2>
      </header>
      <form className="primary-input">
        <Input placeholder="Search trips" />
        <Button className="secondary">Search</Button>
      </form>
      <TabsHome className={styles.tabs} />
      {isLoading && "Loading..."}
      {!isLoading && (
        <section className={styles.travel}>
          {travels.map((travel) => {
            return <TravelCard key={travel.id} travel={travel} />;
          })}
        </section>
      )}
    </section>
  );
}

export default Home;
