"use client";
import { useEffect, useState } from 'react';
import styles from './PersonalDataPage.module.css';
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/user/slice';

// export const PersonalDataPage = () => {
  export default function PersonalDataPage () {
  const [user, setUser] = useState({});
 
   //Подписка на user из Redux
   const userRedux = useSelector(getUser);
   useEffect(() => {
 
     if (!userRedux) {
       return;
     }
     setUser(userRedux);
   }, [userRedux]);

  // useEffect(() => {
  //   const user = localStorage.getItem('user');

  //   if (!user) {
  //     return;
  //   }
  //   setUser(JSON.parse(user));
  // }, []);

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
