'use client'
import { useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { handleAddItem } from '../../services/localStorage';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCart, productActions } from '../../store/basket/slice';


  export default function ProductCardType () {
  const [products, setProducts] = useState(null);
  const search = useSearchParams();

  useEffect(() => {
    const type = search.get('type');
    fetch(`https://8a705e193c725f80.mokky.dev/product?type=${type}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [search]);


  return (
    <>
      <div className={styles.productsWrap}>
        {products?.map(({ id, image, name, description, price }) => (
          <div key={id} className={styles.cardWrap}>
            {/* <NavLink to={`${ROUTES.productID}/${id}`}> */}
            <Link href={`/productsType/${id}`} className={styles.link}>
              <img src={image} className={styles.image}></img>
            
            <span>{name}</span>
            <span className={styles.center}>{description}</span>
            <span>
              <strong>{price} P</strong>
            </span>
            </Link>
            <button className={styles.button} onClick={() => handleAddItem(id,products)}>
            {/* <button className={styles.button} onClick={() => handleAddItem(id)}> */}
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </>
  );
};


// const handleAddItem = id => {
//   console.log(id);

//   // Ищу продукт по id  в массиве всех продуктов
//   // в find(item=> item.id === id) а не (item=> item.id === products.id)
//   const productID = products.find(item => item.id === id);
//   console.log(productID);

//   // Получаю для проверки из localStorage []  по ключу 'itemCart' данные в формате JSON
//   const prevArrayItems = localStorage.getItem('itemCart');

//   if (!prevArrayItems) {
//     // Проверяю и записываю ЕДИНОЖДЫ в LS по ключу 'itemCart'  массив с объектом найденным по id
//     // При 2й и далее записях в этот массив, запись будет происходить смотри код ниже
//     const item = [{ ...productID, quantity: 1 }];
//     localStorage.setItem('itemCart', JSON.stringify(item));
//     return;
//   }
//   // console.log(prevArrayItems);

//   // Полученный []  из JSON конвектирую в js формат пересохраняю в другую переменную чтобы  метод.find приминить
//   const prevArrayCarts = JSON.parse(prevArrayItems);

//   // Проверяю есть ли такой же объект в массиве по id
//   // не верно find(item => item.id === products.id)
//   // тк приходящий products - это не объект, а массив и надо сравнивать c id сразу, а id передан в эту функцию
//   const ItemInPrevArray = prevArrayCarts.find(item => item.id === id);
//   console.log(ItemInPrevArray);

//   if (ItemInPrevArray) {
//     return;
//   }
//   // Дозаписываю  в localStorage объект которого нет в ls по id через {...productID}
//   const item = [...prevArrayCarts, { ...productID, quantity: 1 }];
//   localStorage.setItem('itemCart', JSON.stringify(item));
// };

// useEffect(() => {
//   const type = search.get('type');
//   const fetchData = async () => {
//     const respons = await fetch(`https://8a705e193c725f80.mokky.dev/product?type=${type}`);
//     const data = await respons.json();
//     console.log(data);
//     setProducts(data);
//   };
//   fetchData();
// }, [search]);
