"use client";
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CartIcon from "../../../public/icons/cart2.svg";
import MenuIcon from "../../../public/icons/menu2.svg";
import TelIcon from "../../../public/icons/tel.svg";
import UserIcon from "../../../public/icons/user1.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DeliveryIcon from "../../../public/icons/delivery2.svg";
import HomeIcon from "../../../public/icons/home1.svg";
import PayIcon from "../../../public/icons/pay2.svg";
import { Search } from "../../app/search/Search";
import styles from "./Header.module.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { userActions, getUser } from '../../store/user/slice';
// import { getCart } from '../../store/basket/slice';

export const HeaderMenu = ({
  setPopUpAuth,
  setLeftMenu,
  leftMenu,
  userData,
}) => {
  const handleVisiblePopUp = () => setPopUpAuth(true);

  const handleVisibleLeftMenu = () =>
    setLeftMenu(leftMenu === false ? true : false);

  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  const router = useRouter();
  const path = usePathname(); 

  //user - это состояние страницы (это не объект из LS)  обрабатываю через useState+useEffect
  const [user, setUser] = useState({});

  useEffect(() => {
    // const userLS = JSON.parse(localStorage.getItem('user'));
    // setUser(userLS);
    setUser(userData);
  }, [userData]);

  // Функция проверки роли, редиректа и смены состояния PopUp
  const handleUserClick = () => {
    if (user?.data?.role === "client") {
      router.push("/cabinet");
      // navigate('/cabinet');
      return;
    }

    if (user?.data?.role === "admin") {
      router.push("/admin");
      // navigate('/admin');
      return;
    }

    handleVisiblePopUp();
  };

  //Функция выхода из авторизации
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser((prev) => {});
    // Чтобы не рендерился попап при выходе из кабинета:
    setPopUpAuth(false);

    if (path.includes("/admin") || path.includes("/cabinet")) {
      router.push("/");
    }
  };
  //Получаю значение счетчика корзины
  const count = JSON.parse(localStorage.getItem("itemCart"))?.length;

  return (
    <>
      {/* Хедер для ПК и Планшетов */}
      <header className={styles.headerMenu}>
        <div className={`${styles.container} ${styles.headerMenuWrap}`}>
          <button
            onClick={handleVisibleLeftMenu}
            className={`${styles.burger} ${styles.button} ${styles.item3}`}
          >
            <MenuIcon className={styles.svgMenu} />
          </button>

          <Link href="/" className={`${styles.link} ${styles.item4}`}>
            О нас
          </Link>

          <Link href="/pay" className={`${styles.link} ${styles.item5}`}>
            Оплата
          </Link>

          <Link href="/delivery" className={`${styles.link} ${styles.item6}`}>
            Доставка
          </Link>

          <div className={styles.item1}>
            <Search />
          </div>

          {/* На одной кнопке  несколько  событий onClick
         и поэтому все эти действия включены в одну функцию handleUserClick */}
          <button
            type="button"
            onClick={handleUserClick}
            className={`${styles.button} ${styles.item7}`}
          >
            {/* <UserIcon className={styles.svgButton} /> */}
            <UserIcon
              className={`${styles.svgButton} ${
                user?.token ? styles.LogInButton : ""
              }`}
            />
          </button>

          {user?.token && (
            <button
              className={`${styles.buttonLogout} ${styles.item8}`}
              onClick={handleLogout}
            >
              Выйти
            </button>
          )}

          <Link
            href="/basket"
            className={`${styles.countCart} ${styles.item9}`}
          >
            <CartIcon className={styles.svgCart} />
            {count !== 0 && <div className={styles.count}>{count}</div>}
          </Link>

          <div className={styles.item2}>
            <TelIcon className={styles.svgTel} />
            +7-777-77-77-77
          </div>
        </div>
      </header>

      {/* Хедер для мобильных устройств(адаптация (max-width: 430px)) */}
      <header className={styles.headerMenuPhone}>
        <div className={`${styles.container} ${styles.headerMenuWrap}`}>
          <button
            onClick={handleVisibleLeftMenu}
            className={`${styles.burger} ${styles.button} ${styles.item3}`}
          >
            <MenuIcon className={styles.svgMenu} />
          </button>

          <Link href="/" className={`${styles.link} ${styles.item4}`}>
            <HomeIcon className={styles.svgHome} />
          </Link>

          <Link href="/pay" className={`${styles.link} ${styles.item5}`}>
            <PayIcon className={styles.svgPay} />
          </Link>

          <Link href="/delivery" className={`${styles.link} ${styles.item6}`}>
            <DeliveryIcon className={styles.svgDelivery} />
          </Link>

          <div className={styles.item1}>
            <Search />
          </div>

          {/* На одной кнопке  несколько  событий onClick
         и поэтому все эти действия включены в одну функцию handleUserClick */}
          <button
            type="button"
            onClick={handleUserClick}
            className={`${styles.button} ${styles.item7}`}
          >
            {/* <UserIcon className={styles.svgButton} /> */}
            <UserIcon
              className={`${styles.svgButton} ${
                user?.token ? styles.LogInButton : ""
              }`}
            />
          </button>

          {user?.token && (
            <button
              className={`${styles.buttonLogout} ${styles.item8}`}
              onClick={handleLogout}
            >
              Выйти
            </button>
          )}

          <Link
            href="/basket"
            className={`${styles.link} ${styles.countCart} ${styles.item9}`}
          >
            <CartIcon className={styles.svgCart} />
            {count !== 0 && <div className={styles.count}>{count}</div>}
          </Link>

          <div className={styles.item2}>
            <TelIcon className={styles.svgTel} />
            +7-777-77-77-77
          </div>
        </div>
      </header>
    </>
  );
};


