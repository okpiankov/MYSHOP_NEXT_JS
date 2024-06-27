"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";

export const HeaderMenuAdmin = () => {
  const path = usePathname();
  const router = useRouter();
  // const dispatch = useDispatch();

  //Функция выхода из авторизации
  const handleLogout = () => {
    localStorage.removeItem("user");
    // dispatch(userActions.clearUserStore());
    if (path.includes("/admin")) {
      router.push("/");
    }
  };

  return (
    <header className={styles.headerMenu}>
      <div className={`${styles.container} ${styles.headerMenuWrap}`}>
        <Link href="/" className={styles.link}>
          На сайт
        </Link>

        <button className={styles.buttonLogout} onClick={handleLogout}>
          {/* <button className={styles.buttonLogout} > */}
          Выйти
        </button>
      </div>
    </header>
  );
};
