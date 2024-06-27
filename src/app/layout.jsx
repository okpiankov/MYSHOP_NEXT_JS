"use client";

// import { Inter } from "next/font/google";
// import 'normalize.css';
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Container.module.css";
import "./globals.css";
import { Footer } from "../components/Footer/Footer";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { LeftMenu } from "../components/LeftMenu/LeftMenu";
import { PopUpAuth } from "../components/PopUp/PopUpAuth";

export default function RootLayout({ children }) {
  // объект user нужно получать из глобального состояния типа: редакс или контекст:
  const user = JSON.parse(localStorage.getItem("user"));
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
              userData={user}
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
            <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} />
          )}
          {/* <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} /> */}
        </div>
      </body>
    </html>
  );
}


