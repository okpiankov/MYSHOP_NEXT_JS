"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./OrdersPage.module.css";

const getOrders = async () => {
  try {
    const res = await fetch(`https://8a705e193c725f80.mokky.dev/orders`);
    const orders = await res.json();

    return orders.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.log(error);
  }
};

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const res = getOrders();
    res.then((orders) => setOrders(orders));
  }, []);

  // console.log(orders);

  //Функция удаления заказа по id
  const deleteOrder = (id) => {
    fetch(`https://8a705e193c725f80.mokky.dev/orders/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);

      if (res.ok) {
        setOrders((prev) => prev.filter((order) => order.id !== id));
      } else {
        console.log("Error", res);
      }
    });
  };

  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <p className={styles.wrap2}>
          Для редактирования оформите заказы в корзине
          <strong>Список всех заказов:</strong>
        </p>
        {orders.length > 0 &&
          orders.map((order) => (
            <li key={order.id} className={styles.item}>
              <Link href={`orders/${order.id}`}>
                <strong className={styles.title}>
                  Заказ номер - {order.id}
                </strong>
              </Link>

              <div className={styles.details}>
                <p>
                  <strong>Сумма:</strong> {order.total_price?.toLocaleString()}{" "}
                  руб.
                </p>
                <p>
                  <strong>Кол-во товаров:</strong> {order.goods?.length}
                </p>
                <p>
                  <strong>Телефон:</strong> {order?.tel}
                </p>
                <p>
                  <strong>Доставка:</strong> {order?.delivery}
                </p>
                <p>
                  <strong>Оплата:</strong> {order?.pay}
                </p>

                <button
                  type="button"
                  className={styles.button1}
                  onClick={() => deleteOrder(order.id)}
                >
                  удалить
                </button>
                <Link href={`orders/${order.id}`} className={styles.button2}>
                  редактировать
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
