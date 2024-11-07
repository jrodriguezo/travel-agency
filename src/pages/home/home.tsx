import TabsHome from "@/components/pages/home/tabs/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import styles from "@/pages/home/home.module.css";

function Home() {
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
    </section>
  );
}

export default Home;
