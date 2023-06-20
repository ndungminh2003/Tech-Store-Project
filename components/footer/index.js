import styles from "./styles.module.scss";
import Links from "./Links";
import Socials from "./Socials";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Copyright from "./Copyright";

export default function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright />
      </div>
    </footer>
  );
}
