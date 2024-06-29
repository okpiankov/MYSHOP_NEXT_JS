"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { redirect, usePathname, useRouter } from "next/navigation";
import { userActions } from "@/store/user/slice";
import { useDispatch } from "react-redux";

export const HeaderMenuAdmin = () => {
  const path = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  //Функция выхода из авторизации
  const handleLogout = () => {
    dispatch(userActions.clearUserStore());
    // setPopUpAuth(false);

    if (path.includes("/admin")) {
      redirect("/");
      // router.push("/");
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
