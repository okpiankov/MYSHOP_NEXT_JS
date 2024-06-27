'use client'
import { useEffect, useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CartIcon from '../../../public/icons/cart2.svg';
import MenuIcon from '../../../public/icons/menu2.svg';
import TelIcon from '../../../public/icons/tel.svg';
import UserIcon from '../../../public/icons/user1.svg';
// import { ROUTES } from '../../router/routes';
import { Search } from '../../app/search/Search';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './Header.module.css';
import HomeIcon from '../../../public/icons/home1.svg';
import PayIcon from '../../../public/icons/pay2.svg';
import DeliveryIcon from '../../../public/icons/delivery2.svg';
// import { useSelector, useDispatch } from 'react-redux';
// import { userActions, getUser } from '../../store/user/slice';
// import { getCart } from '../../store/basket/slice';

export const HeaderMenu = ({ setLeftMenu, leftMenu }) => {
  
  // const handleVisiblePopUp = () => setPopUpAuth(true);

  const handleVisibleLeftMenu = () => setLeftMenu(leftMenu === false ? true : false);

  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  const router = useRouter()
  // const searchParams = useSearchParams();
  // console.log(searchParams)
  // const param = searchParams.get("param")

  //user - это состояние страницы (это не объект из LS)  обрабатываю через useState+useEffect
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLS = JSON.parse(localStorage.getItem('user'));
    setUser(userLS);
  }, []);

  // Функция проверки роли, редиректа и смены состояния PopUp
  const handleUserClick = () => {
    if (user?.data?.role === 'client') {
      router.push('/cabinet');
      // navigate('/cabinet');
      return;
    }

    if (user?.data?.role === 'admin') {
      router.push('/admin');
      // navigate('/admin');
      return;
    }
    handleVisiblePopUp();
  };

  //Функция выхода из авторизации
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(prev => {});

    // if (router.pathname.includes('/admin') || router.pathname.includes('/cabinet')) {
      router.push('/');
    // }
  };
  //Получаю значение счетчика корзины
  const count = JSON.parse(localStorage.getItem('itemCart'))?.length

  return (
    <>
      {/* Хедер для ПК и Планшетов */}
      <header className={styles.headerMenu}>
      <div className={`${styles.container} ${styles.headerMenuWrap}`}>

        <button onClick={handleVisibleLeftMenu} className={`${styles.burger} ${styles.button} ${styles.item3}`}>
          <MenuIcon className={styles.svgMenu} />
        </button>
          
          <Link href="/" className={`${styles.link} ${styles.item4}`}>О нас</Link>
          
         <Link href="/pay" className={`${styles.link} ${styles.item5}`}>Оплата</Link>
          
          <Link href="/delivery" className={`${styles.link} ${styles.item6}`}>Доставка</Link>

          <div className={styles.item1}>
          <Search />
          </div>

           {/* На одной кнопке  несколько  событий onClick
         и поэтому все эти действия включены в одну функцию handleUserClick */}
        <button type="button" onClick={handleUserClick} className={`${styles.button} ${styles.item7}`}>
          {/* <UserIcon className={styles.svgButton} /> */}
          <UserIcon className={`${styles.svgButton} ${user?.token ? styles.LogInButton : ''}`} />
        </button>
        
          {user?.token && (
            <button className={`${styles.buttonLogout} ${styles.item8}`} onClick={handleLogout}>
              Выйти
            </button>
          )}

          <Link href="/basket" className={`${styles.countCart} ${styles.item9}`}>
            <CartIcon className={styles.svgCart} />
            {count > 0 && <div className={styles.count}>{count}</div>}
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
        <button onClick={handleVisibleLeftMenu} className={`${styles.burger} ${styles.button} ${styles.item3}`}>
          <MenuIcon className={styles.svgMenu} />
        </button>

        <Link href="/" className={`${styles.link} ${styles.item4}`}>
        <HomeIcon className={styles.svgHome}/>
        </Link>
        
        <Link href="/pay" className={`${styles.link} ${styles.item5}`}>
        <PayIcon className={styles.svgPay}/>
        </Link>
        
        <Link href="/delivery" className={`${styles.link} ${styles.item6}`}>
        <DeliveryIcon className={styles.svgDelivery}/>
        </Link>
        
        <div className={styles.item1}>
          <Search />
        </div>

        {/* На одной кнопке  несколько  событий onClick
         и поэтому все эти действия включены в одну функцию handleUserClick */}
        <button type="button" onClick={handleUserClick} className={`${styles.button} ${styles.item7}`}>
          {/* <UserIcon className={styles.svgButton} /> */}
          <UserIcon className={`${styles.svgButton} ${user?.token ? styles.LogInButton : ''}`} />
        </button>

        {user?.token && (
          <button className={`${styles.buttonLogout} ${styles.item8}`} onClick={handleLogout}>
            Выйти
          </button>
        )}

        <Link href="/basket" className={`${styles.link} ${styles.item9}`}>
        <CartIcon className={styles.svgCart} />
          {count!==0 && <div className={styles.count}>{count}</div>}
        </Link>
       
        <div className={styles.item2}>
          <TelIcon className={styles.svgTel}  />
          +7-777-77-77-77
        </div>
      </div>
    </header>
    </>
  );
};

// export const HeaderMenu = ({ setPopUpAuth }) => {
//   //передача пропса {setPopUpAuth} через скобки{}
//   const handleVisiblePopUp = () => setPopUpAuth(true);
//   const { pathname } = useLocation();
//   // console.log(pathname)

//   //Использовать нужно не компонент <Navigate to="/" /> а хук useNavigate, тк хук более передсказуемо работает
//   //и если авторизованный пользователь находясь не на стр. лич.кабинета нажмет на иконку, то попадет снова в личный кабинет
//   const navigate = useNavigate();

//   //user - это состояние страницы (это не объект из LS)  обрабатываю через useState+useEffect
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const userLS = JSON.parse(localStorage.getItem('user'));
//     setUser(userLS);
//   }, []);
//   // const user = JSON.parse(localStorage.getItem('user'));

//   // В функции на иконку одновременно присутствуют несколько действий:
//   // проверка на admin/client редирект и вызов функции смены состояния PopUp
//   // user это переменная - начальное состояние из  useState
//   // При повторном нажатии после авторизации на иконку авторизации происходит переход на стр. кабинет/админ тк navigate('/url')
//   // Функция проверки роли редиректа и смены состояния PopUp

//   const handleUserClick = () => {
//     // не нужен объект из LS тк user - это состояние страницы
//     // const user = JSON.parse(localStorage.getItem('user'));

//     if (user?.data?.role === 'client') {
//       navigate('/cabinet');
//       return;
//     }

//     if (user?.data?.role === 'admin') {
//       navigate('/admin');
//       return;
//     }
//     // Передается именно вызов функции а не сама функция
//     handleVisiblePopUp();
//   };

//   //Функция выхода из авторизации
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(prev => {});

//     if (pathname.includes(ROUTES.admin) || pathname.includes(ROUTES.cabinet)) {
//       navigate('/');
//     }
//   };


// import Link from "next/link";
// import styles from "./NavBar.module.css";

// export const NavBar = () => {
//   return (
//     <div className={styles.menu}>
//       <Link href="/">Главная</Link>
//       <Link href="/ceilings">Категории</Link>
//       <Link href="/articles">Статьи</Link>
//       <Link href="/actions">Акции</Link>
//     </div>
//   );
// };
