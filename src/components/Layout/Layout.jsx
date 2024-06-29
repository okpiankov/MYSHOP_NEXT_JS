"use client";

// import { Inter } from "next/font/google";
// import 'normalize.css';
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../../app/Container.module.css";
import "../../app/globals.css";
import { Footer } from "../Footer/Footer";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { PopUpAuth } from "../PopUp/PopUpAuth";
import { useSelector } from "react-redux";
import { getUser } from "../../store/user/slice";

//Делаю отдельный компонент Layout чтобы user получать из контекста редакса и обернуть редаксом все приложение

export function Layout({ children }) {
  // объект user нужно получать из глобального состояния типа: редакс или контекст:
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = useSelector(getUser);
  const [popUpAuth, setPopUpAuth] = useState(false);

  // состояние для бургер меню при адаптации под планшет
  const [leftMenu, setLeftMenu] = useState(true);

  const path = usePathname();

  return (
    <html lang="en">
      <body>
        <div className={styles.mainWrap}>
          {/* Скрываю хедер, футер, лефтменю в зависимости от макета */}
          {!path.includes("/admin") && (
            <HeaderMenu
              setPopUpAuth={setPopUpAuth}
              setLeftMenu={setLeftMenu}
              leftMenu={leftMenu}
              // userData={user}
            />
          )}

          <main
            className={`${styles.container} ${styles.innerWrap} ${
              leftMenu === true ? styles.innerWrapTrue : ""
            }`}
          >
            {/* {leftMenu && <LeftMenu />} */}
            {!(path.includes("/admin") || path.includes("/cabinet")) &&
              leftMenu && <LeftMenu />}

            <div className={styles.children}>{children}</div>
          </main>

          {!path.includes("/admin") && <Footer />}
          {!user?.token && (
            // {!(path.includes("/admin") || path.includes("/cabinet"))  && (
            <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} />
          )}
          {/* <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} /> */}
        </div>
      </body>
    </html>
  );
}
