"use client";
import { useEffect, useState } from 'react';
import styles from './PersonalDataPage.module.css';

// export const PersonalDataPage = () => {
  export default function PersonalDataPage () {
  const [user, setUser] = useState({});
 
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      return;
    }
    setUser(JSON.parse(user));
  }, []);

  return (
    <div className={styles.wrap}>
      <strong>Личная информация:</strong>
      <div>Имя пользователя:</div>
      <strong>{user?.data?.fullName}</strong>
      <div>Электронная почта:</div>
      <strong>{user?.data?.email}</strong>
      <div>Ваш id:</div>
      <strong>{user?.data?.id}</strong>
      <div>Телефон:</div>
      <strong>{user?.data?.tel}</strong>
    </div>
  );
};
