import styles from "./AdminPage.module.css";

export default function HomeAdmin() {
  return (
    <div className={styles.adminPageWrap}>
      <div className={styles.contentBox}>
        <h2>Добро пожаловать в адмику</h2>
        <h3>Это закрытый роут</h3>
      </div>
    </div>
  );
}
