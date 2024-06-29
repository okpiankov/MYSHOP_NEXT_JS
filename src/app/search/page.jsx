'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { NavLink, useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'next/navigation'
import styles from './Search.module.css';
// import { handleAddItem } from '../../services/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, productActions } from '../../store/basket/slice';

  export default function SearchPage () {
  const [products, setProducts] = useState([]);
  const search = useSearchParams();
  const title = search.get('title');

  console.log(search.get('title'));

  useEffect(() => {
    fetch(`https://8a705e193c725f80.mokky.dev/product?name=*${title}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setProducts(res);
      });
  }, [title]);

  // Запись данных карточек товаров в Redux:
  const dispatch = useDispatch();
  // Получю для проверки из Redux  массив товаров для проверки
  const prevArrayItems = useSelector(getCart);

  const handleAddItem = id => {
    // Ищу продукт по id  в массиве всех продуктов
    const productID = products.find(item => item.id === id);

    // Проверяю и записываю ЕДИНОЖДЫ в Redux  массив с объектом найденным по id
    if (!prevArrayItems) {
      const item = [{ ...productID, quantity: 1 }];
      dispatch(productActions.setCart(item));
      return;
    }

    // Проверяю есть ли такой же объект в массиве по id
    const ItemInPrevArray = prevArrayItems.find(item => item.id === id);
    // console.log(ItemInPrevArray);

    if (ItemInPrevArray) {
      return;
    }
    // Дозаписываю  в  Redux объект которого нет в  Redux по id через {...productID}
    const item = [...prevArrayItems, { ...productID, quantity: 1 }];
    dispatch(productActions.setCart(item));
  };

  return (
    <>
      <div className={styles.orderWrap}>
        {products.length === 0 ? (
          <p className={styles.notFound}>Ничего не найдено</p>
        ) : (
          // result.map(({ id, image, name, description, price }) => <div key={id}>{name}</div>)

          <div className={styles.productsWrap}>
            {products?.map(({ id, image, name, description, price }) => (
              <div key={id} className={styles.cardWrap}>
                {/* <NavLink to={`${ROUTES.productID}/${id}`}> */}
                <Link href={`/productsAll/${id}`} className={styles.link}>
                  <img src={image} className={styles.image}></img>
                </Link>
                
                <span>{name}</span>
                <span className={styles.center}>{description}</span>
                <span>
                  <strong>{price} руб.</strong>
                </span>
                {/* <button className={styles.buttonCard} onClick={() => handleAddItem(id, products)}> */}
                <button className={styles.buttonCard} onClick={() => handleAddItem(id)}>
                  Добавить в корзину
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
