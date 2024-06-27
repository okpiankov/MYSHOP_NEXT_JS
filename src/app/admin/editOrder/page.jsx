"use client";

import { DeleteProductOrder } from './DeleteProductOrder';
import styles from './EditOrderPage.module.css';
import { useState } from 'react';

  export default function EditOrderPage () {
  const [formData, setFormData] = useState({
    id_order: '',
    goods: [{ id: '', name: '', quantity: '' }],
  });

  const arrayName = formData.goods?.map(item => item.name);
  const name = arrayName[0];
  const arrayQuantity = formData.goods?.map(item => item.quantity);
  const quantity = arrayQuantity[0];
  const arrayId = formData.goods?.map(item => item.id);
  const id = arrayId[0];
  // const obj = formData.goods?.find(item => item.id===id);
  // console.log(obj)
  // const{name, quantity, id}= obj

  const handleChange = event => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      goods: [
        {
          ...prevState,
          [name]: value,
        },
      ],
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`https://8a705e193c725f80.mokky.dev/orders/${formData.id_order}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goods: [{ id: id, name: name, quantity: quantity }] }),
      // body: JSON.stringify({   name,  quantity}),
    }).then(res => res.json());
    // .then(res => console.log(res));
  };

  return (
    <div className={styles.contentBox}>
      <div className={styles.editProductWrap}>
        <form className={styles.inputWrap} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="numder"
            value={formData.id_order}
            name="id_order"
            onChange={handleChange}
            placeholder="Введите id заказа"
          ></input>

          <input
            className={styles.input}
            type="numder"
            value={formData.goods?.map(item => item.id)}
            name="id"
            onChange={handleChange}
            placeholder="Введите id товара"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.goods?.map(item => item.name)}
            name="name"
            onChange={handleChange}
            placeholder="Введите название товара"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.goods?.map(item => item.quantity)}
            name="quantity"
            onChange={handleChange}
            placeholder="Введите количество товара"
          ></input>

          {/* <input
            className={styles.input}
            type="numder"
            value={formData.id_user}
            name="id_user"
            onChange={handleChange}
            placeholder="Введите id пользователя"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.fullName}
            name="fullName"
            onChange={handleChange}
            placeholder="Введите имя пользователя"
          ></input> */}

          <button type="submit" className={styles.buttonSubmit}>
            Редактировать заказ
          </button>
        </form>
      </div>

      {/* <DeleteProductOrder/> */}

      <div className={styles.patternWrap}>
        <span>Скопируйте пример данных отсюда:</span>
        <span>название: Смартфон Apple iPhone 15</span>
      </div>
    </div>
  );
};
