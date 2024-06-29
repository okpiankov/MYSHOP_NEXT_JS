"use client";

// import { HeaderMenu } from "../../components/HeaderMenuLK/HeaderMenu";
import { LeftMenu } from "../../components/LeftMenuLK/LeftMenu";
import { redirect } from "next/navigation";
import { useState } from "react";
import styles from "./Container.module.css";
import { getUser } from "../../store/user/slice";
import { useSelector } from "react-redux";

export default function LayoutUser({ children }) {
  // // объект user нужно получать из глобального состояния типа: редакс или контекст:
  // const user = JSON.parse(localStorage.getItem("user"));
  // const [popUpAuth, setPopUpAuth] = useState(false);
  const user = useSelector(getUser);

  // Имитация закрытого роутинга
  if (user?.data.role !== "client") {
    redirect("/");
  }

  // // состояние для бургер меню при адаптации под планшет
  // const [leftMenu, setLeftMenu] = useState(true);

  return (
    <div className={styles.mainWrap}>
      {/* <HeaderMenu setLeftMenu={setLeftMenu} leftMenu={leftMenu} /> */}
      <div
        className={`${styles.container} ${styles.innerWrap} `}
      >
        {/* {leftMenu && <LeftMenu />} */}
        <LeftMenu />
        <div className={styles.children}>{children}</div>
      </div>
      {/* <Footer /> */}
      {/* <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} /> */}
    </div>
  );
}


// // состояние для бургер меню при адаптации под планшет
// const [leftMenu, setLeftMenu] = useState(true);

// <div
// className={`${styles.container} ${styles.innerWrap} ${
//   leftMenu === true ? styles.innerWrapTrue : ""
// }`}
// >
// {leftMenu && <LeftMenu />}

