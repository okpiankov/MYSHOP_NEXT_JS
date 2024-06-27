"use client";
import "./globals.css";
import { redirect } from "next/navigation";
import { FooterAdmin } from "../../components/FooterAdmin/Footer";
import { HeaderMenuAdmin } from "../../components/HeaderMenuAdmin/HeaderMenu";
import { LeftMenuAdmin } from "../../components/LeftMenuAdmin/LeftMenu";
import styles from "./Container.module.css";

export default function LayoutAdmin({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

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
