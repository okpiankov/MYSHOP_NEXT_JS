import styles from "./Footer.module.css";

export const FooterAdmin = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerWrap}`}></div>
    </footer>
  );
};
