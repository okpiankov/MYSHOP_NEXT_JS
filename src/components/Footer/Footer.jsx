import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerWrap}`}>
        <div className={styles.blockFooter2}>
          <p>
            <strong>О проекте</strong>
          </p>
          <p>
            Интернет-магазин<br></br>
            Используемые технологии при разработке:<br></br>
            html, css, JavaScript, React,  NextJS, Redux, TypeScript
          </p>
          <p>
            Автор:<br></br>
            Пьянков Олег Константинович
          </p>
          <p>Дата: 2024 г.</p>
        </div>
        <div className={styles.blockFooter}>
          <p>
            <strong>Покупателям</strong>
          </p>
          <p>
            <Link href="/plug" className={styles.link}>
              Как сделать заказ
            </Link>
          </p>
          <p>
            <Link href="/plug" className={styles.link}>
              Вопросы и ответы
            </Link>
          </p>
          <p>
            <Link href="/plug" className={styles.link}>
              Возврат товара
            </Link>
          </p>
          <p>
            <Link href="/plug" className={styles.link}>
              Обратиться в поддержку
            </Link>
          </p>
        </div>
        <div className={styles.blockFooter}>
          <p>
            <strong>Компания</strong>
          </p>
          <p>
            <Link href="/" className={styles.link}>
              О нас
            </Link>
          </p>
          <p>
            <Link href="/plug" className={styles.link}>
              Мы на карте
            </Link>
          </p>
          <p>
            <Link href="/plug" className={styles.link}>
              Реквизиты
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
