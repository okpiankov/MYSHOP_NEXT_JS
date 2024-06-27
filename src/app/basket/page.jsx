"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BasketCard } from "../../components/BasketCard/BasketCard";
import styles from "./BasketPage.module.css";
// import { NavLink, Navigate, useNavigate } from 'react-router-dom';
// import { ROUTES } from '../../router/routes';

export default function BasketPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const arrayCarts = localStorage.getItem("itemCart");

    if (!arrayCarts) {
      return;
    }
    setItems(JSON.parse(arrayCarts));
  }, []);

  const handlelDeleteClick = (id) => {
    const arrayProducts = JSON.parse(localStorage.getItem("itemCart"));

    //получаю новый массив исключающий объект по id, не равно в JS !=
    const newArray = arrayProducts.filter((item) => item.id != id);
    // console.log(newArray);

    //записываю новый массив товаров в LS после каждого удаления товара
    localStorage.setItem("itemCart", JSON.stringify(newArray));

    setItems((prev) => newArray);
  };

  const handlelQuantityClick = (id, action) => {
    //Делаю копию массива
    const newArrayInCart = [...items];

    //Достаю объект из массива
    const product = newArrayInCart.find((item) => item.id === id);

    //Обращаюсь в объекте к полю quantity
    product.quantity =
      action === "add" ? product.quantity + 1 : product.quantity - 1;
    if (product.quantity <= 0) {
      return handlelDeleteClick(id);
    }
    // Записываю копию массива в LS
    localStorage.setItem("itemCart", JSON.stringify(newArrayInCart));
    setItems(newArrayInCart);
  };

  //Логика подсчета общей стоимости с учетом quantity
  const arrayPrices = items
    .map((item) => item.price * item.quantity)
    .map(parseFloat);
  // console.log(arrayPrices);
  const result = arrayPrices.reduce((sum, current) => sum + current, 0);
  // console.log(result)

  const [formData, setFormData] = useState({
    // id: '',
    // fullName: '',
    // email: '',
    tel: "",
    delivery: "",
    pay: "",
  });

  //Формирую массив из объектов в которых присутствуют только необходимые поля
  const arrayProducts = items.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));
  // console.log(arrayProducts);
  //arrayOrder(заказ) это объект не массив
  const arrayOrder = {
    ...formData,
    total_price: result,
    user_id: JSON.parse(localStorage.getItem("user"))?.data.id,
    goods: [...arrayProducts],
  };
  // console.log(arrayOrder);

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Здесь можно прописать еще один fetch для регистрации пользователя
    // если заказ оформил неавторизованый пользователь

    fetch("https://8a705e193c725f80.mokky.dev/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arrayOrder),
    }).finally(() => setIsLoading(false));
    // .then(res => console.log(res));

    // navigate(ROUTES.order);
    router.push("/cabinet/order");
  };

  return (
    <>
      {/* Корзина */}
      <div className={styles.basketWrap}>
        <div className={styles.cardWrap}>
          <strong className={styles.title}>Корзина</strong>
          {items.map((item) => (
            <BasketCard
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              id={item.id}
              price={item.price}
              quantity={item.quantity}
              handlelDeleteClick={handlelDeleteClick}
              handlelQuantityClick={handlelQuantityClick}
            />
          ))}
        </div>

        {/* Карта оформления заказа */}
        <div className={styles.placeOrderWrap}>
          <div className={styles.total}>
            <div>Итого:</div>
            <div>{result} P</div>
          </div>

          <form className={styles.inputWrap} onSubmit={handleSubmit}>
          <input
              className={styles.input}
              type="text"
              value={formData.tel}
              name="tel"
              onChange={handleChange}
              placeholder="Введите телефон"
            ></input>

            <select name="pay" value={formData.pay} onChange={handleChange} className={styles.select}>
              <option>Выберите способ оплаты:</option>
              <option>Карта</option>
              <option>Наличные</option>
              <option>Счет</option>
            </select>

            <select name="delivery" value={formData.delivery} onChange={handleChange} className={styles.select}>
              <option>Выберите способ доставки:</option>
              <option>Самовывоз</option>
              <option>СДЭК</option>
              <option>ОЗОН</option>
            </select>

            {/* <input
              className={styles.input}
              type="text"
              value={formData.fullName}
              name="fullName"
              onChange={handleChange}
              placeholder="Введите имя"
            ></input> */}

            {/* <input
              className={styles.input}
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Введите email"
            ></input> */}

            <button
              type="submit" disabled={isLoading} 
              className={
                isLoading === true
                  ? styles.disabled
                  : styles.buttonSubmit
              }
            >
              Оформить заказ
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// export const BasketPage = () => {
//   //использую useState чтобы обновлять новое состояние в []
//   //использую один и тотже useState для чтения товаров из LS и функций handlelDeleteClick handlelQuantityClick
//   const [items, setItems] = useState([]);

//   // использую useEffect чтобы не было бесконечных рендеров
//   useEffect(() => {
//     const arrayCarts = localStorage.getItem('itemCart');

//     // Проверка нужна тк если ls пустой то map выдаст ошибку, ему нужен []:
//     if (!arrayCarts) {
//       return; // СТОП функция! и код ниже не выполнится:
//     }
//     setItems(JSON.parse(arrayCarts));
//   }, []);

//   const handlelDeleteClick = id => {
//     const arrayProducts = JSON.parse(localStorage.getItem('itemCart'));
//     //получаю новый массив исключающий объект по id, не равно в JS !=
//     const newArray = arrayProducts.filter(item => item.id != id);
//     // console.log(newArray);

//     //записываю новый массив товаров в LS после каждого удаления товара
//     localStorage.setItem('itemCart', JSON.stringify(newArray));

//     //Для обновления списка товаров в корзине, нужно поменять состояние
//     //иначе товар удалиться  из LS но на странице до момента перезагрузки не отобразятся изменения
//     setItems(prev => newArray);
//   };

//   const handlelQuantityClick = (id, action) => {
//     //Делаю копию массива
//     const newArrayInCart = [...items];
//     // console.log(newArrayInCart);

//     //Достаю объект из массива
//     const product = newArrayInCart.find(item => item.id === id);
//     // console.log(product);

//     //Обращаюсь в объекте к полю quantity
//     product.quantity = action === 'add' ? product.quantity + 1 : product.quantity - 1;
//     if (product.quantity <= 0) {
//       return handlelDeleteClick(id);
//     }
//     // Записываю копию массива в LS
//     localStorage.setItem('itemCart', JSON.stringify(newArrayInCart));
//     setItems(newArrayInCart);
//   };

//   //Логика подсчета общей стоимости с учетом quantity
//   // const arrayProducts = JSON.parse(localStorage.getItem('itemCart'));
//   // // console.log(arrayProducts);
//   const arrayPrices = items.map(item => item.price * item.quantity).map(parseFloat);
//   console.log(arrayPrices);
//   const result = arrayPrices.reduce((sum, current) => sum + current, 0);
//   console.log(result);

// const { fullName, email, tel, delivery, } = formData;
// { fullName, email, tel, delivery, name, quantity}
