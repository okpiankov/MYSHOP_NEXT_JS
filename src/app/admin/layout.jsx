"use client";
import "./globals.css";
import { redirect } from "next/navigation";
import { FooterAdmin } from "../../components/FooterAdmin/Footer";
import { HeaderMenuAdmin } from "../../components/HeaderMenuAdmin/HeaderMenu";
import { LeftMenuAdmin } from "../../components/LeftMenuAdmin/LeftMenu";
import styles from "./Container.module.css";
import { getUser } from "../../store/user/slice";
import { useSelector } from "react-redux";

export default function LayoutAdmin({ children }) {
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = useSelector(getUser);

  // Имитация закрытого роутинга
  if (user?.data.role !== "admin") {
    redirect("/");
  }

  return (
    <div className={styles.mainWrap}>
      <HeaderMenuAdmin />
      <div className={`${styles.container} ${styles.innerWrap}`}>
        <LeftMenuAdmin />
        <div className={styles.children}>{children}</div>
      </div>
      <FooterAdmin /> 
    </div> 
  );
}
