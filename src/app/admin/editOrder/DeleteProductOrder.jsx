// import styles from './DeleteProductOrder.module.css';
// import { useEffect, useState } from 'react';

// export const DeleteProductOrder = () => {
//   const [formData, setFormData] = useState([{
//     id_order: '',
//     // tel: '',
//     // delivery: '',
//     // total_price: '',
//     // user_id: '',
//     goods: [{ id: '', name: '', quantity: '' }],
//   }]);

//   useEffect(() => {
//     fetch('https://8a705e193c725f80.mokky.dev/orders')
//       .then(response => response.json())
//       .then(data => setFormData(data))
//       // .then(data => console.log(data))

//   }, []);
//   console.log(formData)

//   // const arrayName = formData.goods?.map(item => item.name);
//   // const name = arrayName[0];
//   // const arrayQuantity = formData.goods?.map(item => item.quantity);
//   // const quantity = arrayQuantity[0];

//   // const arrayId = formData.goods?.map(item => item.id);
//   // const id = arrayId[0];

// // const result1 =  formData?.find(item => item.id === id_order)
// // console.log(result1)
// // const result2 = result1?.goods
// // console.log(result2)
// // const result3 = result2?.find(item => item.id === id)
// // console.log(result3)

// const handleChange = event => {
//   // console.log(event.target.value);
//   const { name, value } = event.target;
//   setFormData(prevState => ({
//     ...prevState,
//     [name]: value,
//     goods: [
//       {
//         ...prevState,
//         [name]: value,
//       },
//     ],
//   }));
// };

// const handleSubmit = event => {
//   event.preventDefault();

//   fetch(`https://8a705e193c725f80.mokky.dev/orders/${formData.id_order}`, {
//     method: 'PATCH',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(),

//   }).then(res => res.json());
//   // .then(res => console.log(res));
// };

//   return (
//     <div className={styles.contentBox}>
//       <div className={styles.editProductWrap}>
//         <form className={styles.inputWrap} onSubmit={handleSubmit}>
//           <input
//             className={styles.input}
//             type="numder"
//             value={formData?.id_order}
//             name="id_order"
//             onChange={handleChange}
//             placeholder="Введите id заказа"
//           ></input>

//           <input
//             className={styles.input}
//             type="numder"
//             value={formData.goods?.map(item => item.id)}
//             name="id"
//             onChange={handleChange}
//             placeholder="Введите id товара"
//           ></input>

//           <button type="submit" className={styles.buttonSubmit}>
//             Удалить товар из заказа
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


// import styles from './DeleteProductOrder.module.css';
// import { useState } from 'react';

// export const DeleteProductOrder = () => {

//   const [formData, setFormData] = useState({
//     id_order: '',
//     goods: [{ id: '',}],
//   });

//   const handleChange = event => {
//     // console.log(event.target.value);
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//       goods: [
//         {
//           ...prevState,
//           [name]: value,
//         },
//       ],
//     }));
//   };
//   const id = formData.goods.map(item => item.id)
//   console.log(id)

//   const handleSubmit = event => {
//     event.preventDefault();

//     fetch(`https://8a705e193c725f80.mokky.dev/orders/${formData.goods.map(item => item.id)}`, {
//       method: 'DELETE',
//     });
//     // .then(res => res.json())
//     // .then(res => console.log(res));
//   };

//   return (
//     <div className={styles.contentBox}>
//       <div className={styles.editProductWrap}>
//         <form className={styles.inputWrap} onSubmit={handleSubmit}>
//         <input
//             className={styles.input}
//             type="numder"
//             value={formData?.id_order}
//             name="id_order"
//             onChange={handleChange}
//             placeholder="Введите id заказа"
//           ></input>

//           <input
//             className={styles.input}
//             type="numder"
//             value={formData.goods?.map(item => item.id)}
//             name="id"
//             onChange={handleChange}
//             placeholder="Введите id товара"
//           ></input>

//           <button type="submit" className={styles.buttonSubmit}>
//             Удалить товар из заказа
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
