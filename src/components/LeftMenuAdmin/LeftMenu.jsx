"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./LeftMenu.module.css";
import { getUser } from '../../store/user/slice';
import { useSelector } from 'react-redux';

export const LeftMenuAdmin = () => {
  const [avatar, setAvatar] = useState("");

    //Подписка на user из Redux
    const userRedux = useSelector(getUser);
    useEffect(() => {
      if (!userRedux) {
        return;
      }
      const {
        data: { role, avatar, fullName },
      } = userRedux;
  
      if (role === 'admin') {
        setAvatar(avatar);
      } else {
        return;
      }
    }, [userRedux]);

  //Подписка на user из localStorage
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (!user) {
  //     return;
  //   }

  //   const {
  //     data: { role, avatar },
  //   } = user;

  //   if (role === "admin") {
  //     setAvatar(avatar);
  //   } else {
  //     return;
  //   }
  // }, []);

  return (
    <nav className={styles.leftMenuWrap}>
      <img src={avatar} className={styles.avatar} alt="admin" />
      <div className={styles.user}>Admin</div>

      <Link href="/admin/addDeleteProduct" className={styles.link}>
        Добавить / удалить товар
      </Link>

      <Link href="/admin/editProduct" className={styles.link}>
        Редактировать товар
      </Link>

      <Link href="/admin/addDeleteUser" className={styles.link}>
        Добавить / удалить пользователя
      </Link>

      <Link href="/admin/editUser" className={styles.link}>
        Редактировать данные пользователя
      </Link>

      <Link href="/admin/orders" className={styles.link}>
      Редактировать заказы
      </Link>

      <Link href="/plug" className={styles.link}>
        Редактировать категорию товаров
      </Link>

      <Link href="/plug" className={styles.link}>
        Редактировать акции
      </Link>
    </nav>
  );
};
