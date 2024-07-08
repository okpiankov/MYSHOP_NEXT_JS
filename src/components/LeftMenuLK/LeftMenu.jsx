"use client";

import Link from "next/link";
import styles from "./LeftMenu.module.css";
import { useEffect, useState } from "react";
import { getUser } from '../../store/user/slice';
import { useSelector } from 'react-redux';

export const LeftMenu = () => {
  const [avatar, setAvatar] = useState("");
  const [fullName, setFullName] = useState("");

  //Подписка на user из Redux
  const userRedux = useSelector(getUser);
  useEffect(() => {
    if (!userRedux) {
      return;
    }
    const {
      data: { role, avatar, fullName },
    } = userRedux;

    if (role === 'client') {
      setAvatar(avatar);
      setFullName(fullName);
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
  //     data: { role, avatar, fullName },
  //   } = user;

  //   if (role === "client") {
  //     setAvatar(avatar);
  //     setFullName(fullName);
  //   } else {
  //     return;
  //   }
  // }, []);

  return (
    <nav className={styles.leftMenuWrap}>
      <img src={avatar} className={styles.avatar} alt="picture" />
      <div className={styles.user}>{fullName}</div>

      <Link href="/cabinet/personalData" className={styles.link}>
        Личные данные
      </Link>

      <Link href="/cabinet/basket" className={styles.link}>
        Моя корзина
      </Link>

      <Link href="/cabinet/order" className={styles.link}>
        Мои заказы
      </Link>

      <Link href="/plug" className={styles.link}>
        {" "}
        Купленные товары
      </Link>

      <Link href="/plug" className={styles.link}>
        Баланс средств
      </Link>

      <Link href="/plug" className={styles.link}>
        Сообщения
      </Link>
    </nav>
  );
};
