"use client";
import { useState } from "react";
import styles from "./AuthPage.module.css";
import { validateEmail, validatePassword } from "./validate";
// import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useRouter } from "next/navigation";
import { userActions, getUserToken, getUser } from "../../store/user/slice";
import { useDispatch } from "react-redux";

export const AuthPage = ({ setForm }) => {
  // const navigate = useNavigate();
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "123",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email" && value !== " ") {
      validateEmail(value, setEmailError);
    }
    if (name === "password" && value !== " ") {
      validatePassword(value, setPasswordError);
    }
  };

  // Запись  user в redux:
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://8a705e193c725f80.mokky.dev/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((userData) => {
        dispatch(userActions.setUser(userData));
        // console.log(userData);

        const {
          token,
          data: { role },
        } = userData;

        if (token && role === "client") router.push("/cabinet");
        if (token && role === "admin") router.push("/admin");
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(userActions.setIsLoading(false)));
  };

  return (
    <div className={styles.authWrap}>
      <div>
        <span className={styles.select}>Вход</span>
        {/* В setForm можно передавать любую строку например: 'register' */}
        <button
          className={styles.selectАctive}
          onClick={() => setForm("register")}
        >
          / Регистрация{" "}
        </button>
      </div>

      <form className={styles.inputWrap} onSubmit={handleSubmit} noValidate>
        {emailError && emailError}
        <input
          className={styles.input}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email* user@test.com / admin@test.com"
        ></input>
        {passwordError && passwordError}
        <input
          className={styles.input}
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Пароль* 123"
        ></input>

        <button type="submit" className={styles.buttonSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
};

// // Запись  user  в localStorage:
// const handleSubmit = event => {
//   event.preventDefault();

//   fetch('https://8a705e193c725f80.mokky.dev/auth', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then(res => res.json())
//     .then(res => {
//       localStorage.setItem('user', JSON.stringify(res));

//       const {
//         token,
//         data: { role },
//       } = res;

//       if (token && role === 'client') router.push('/cabinet');
//       if (token && role === 'admin') router.push('/admin');
//     });
// };

// // Тип данных в State и setState д/б одинаковый
// const [emailError, setEmailError] = useState('');

// Конкретный вид event приходит автоматически в функции в зависимости
// от используемого обаботчика событий onChange={handleChange}, onSubmit={handleSubmit} и т.д.
//
// const handleChange = event => {
//   console.log(event.target.value);
//   const { name, value } = event.target;
//   setFormData(prevState => ({
//     ...prevState,
//     [name]: value,
//   }));
//   // За место [name] подставляется конкретное имя(идинтификатор) инпута
//   // За место value подставляется динамически меняющееся значение в поле инпута

//   if (name === 'email' && event.target.value !== ' ') {
//     return validateEmail(event.target.value);
//   }
//   if (name === 'password' && event.target.value !== ' ') {
//     return validatePassword(event.target.value);
//   }
//   // validateEmail(event.target.value)
//   // validatePassword(event.target.value)
// };

// Почему проверка не нужна при записи в localStorage
// .then(res => {setAuthData(res)
//   const prevItem = localStorage.getItem('user');
//   if (!prevItem) {
//   const item = { ...authData };
//   localStorage.setItem('user', JSON.stringify(item));
//   return;
//   }
// })

// Запись в localStorage д/б в .then( здесь ) где приходят данные там и записывать!
// Если вне .then(  ) то будет задействован везде рендер попапа
// .then(res => {
// setAuthData(res);
// localStorage.setItem('user', JSON.stringify(res));
// });

// //Почему запись в LS вне .then( ) происходит но пропадает при переходе на др.стр.
// //И токен приходит происходит редирект
// const item = { ...authData };
// localStorage.setItem('user', JSON.stringify(item));

//const {data.role} = userRole; Как достать role из объекта data?????
// const {
//   token,
//   data: { role },
// } = userRole

// .then(res => {
//   localStorage.setItem('user', JSON.stringify(res));
//   const {
//     token,
//     data: { role },
//   } = res;
// Это только перенаправление на страницу, но авторизацию делать только через закрытие роуты
//   if (token && role === 'client') navigate('/cabinet');
//   if (token && role === 'admin') navigate('/admin');
// });
