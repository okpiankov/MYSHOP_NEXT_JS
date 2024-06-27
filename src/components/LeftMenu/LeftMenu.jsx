import styles from "./LeftMenu.module.css";
import Link from "next/link";

export const LeftMenu = () => {
  return (
    <nav className={styles.leftMenuWrap}>
      <div className={`${styles.all} ${styles.link}`}>Категории</div>
      <div className={styles.popUpMenu}>
        {/* <NavLink to={ROUTES.productsAll} className={`${styles.all} ${styles.link}`}>Все</NavLink> */}
        <Link href="/productsAll" className={`${styles.all} ${styles.link}`}>
          Все
        </Link>

        {/* <NavLink to={`${ROUTES.productsType}?type=phone`} className={`${styles.phone} ${styles.link}`}>Смартфоны</NavLink> */}
        <Link
          href="/productsType?type=phone"
          className={`${styles.phone} ${styles.link}`}
        >
          Смартфоны
        </Link>

        <Link
          href="/productsType?type=laptop"
          className={`${styles.laptop} ${styles.link}`}
        >
          Ноутбуки
        </Link>

        <Link
          href="/productsType?type=TV"
          className={`${styles.tv} ${styles.link}`}
        >
          Телевизоры
        </Link>
      </div>

      <Link
        href="/productsType?type=phone"
        className={`${styles.phone} ${styles.link}`}
      >
        Смартфоны
      </Link>

      <Link
        href="/productsType?type=laptop"
        className={`${styles.laptop} ${styles.link}`}
      >
        Ноутбуки
      </Link>

      <Link
        href="/productsType?type=TV"
        className={`${styles.tv} ${styles.link}`}
      >
        Телевизоры
      </Link>
    </nav>
  );
};
