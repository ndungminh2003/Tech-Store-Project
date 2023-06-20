import { RiSearch2Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Main() {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <img src="../../../react.svg" alt="" /> TechStore
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" legacyBehavior>
          <a className={styles.cart}>
            <FaShoppingCart />
            <span>0</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
