import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import styles from "@/components/ui/header/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <Button className="primary">Create a new trip</Button>
      </div>
    </header>
  );
}

export default Header;
