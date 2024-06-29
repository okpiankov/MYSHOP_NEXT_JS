"use client";

// // redux-persist:
import { Provider } from "react-redux";
import { persistor, rootStore } from "../store/store";
import { Layout } from "../components/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={null} persistor={persistor}>
      <Layout>{children}</Layout>
      </PersistGate>
    </Provider>
  );
}

// // Просто redux:
// import { Provider } from "react-redux";
// import { persistor, rootStore } from "../store/store";
// import { Layout } from "../components/Layout/Layout";

// export default function RootLayout({ children }) {
//   return (
//     <Provider store={rootStore}>
//       <Layout>{children}</Layout>
//     </Provider>
//   );
// }






// "use client";

// // import { Inter } from "next/font/google";
// // import 'normalize.css';
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import styles from "./Container.module.css";
// import "./globals.css";
// import { Footer } from "../components/Footer/Footer";
// import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
// import { LeftMenu } from "../components/LeftMenu/LeftMenu";
// import { PopUpAuth } from "../components/PopUp/PopUpAuth";
// import { Provider, useSelector } from 'react-redux';
// import { persistor, rootStore } from '../store/store';
// import { getUser } from "../store/user/slice";

// export default function RootLayout({ children }) {
//   // объект user нужно получать из глобального состояния типа: редакс или контекст:
//   // const user = JSON.parse(localStorage.getItem("user"));
//   // const user = useSelector(getUser);
//   const [popUpAuth, setPopUpAuth] = useState(false);

//   // состояние для бургер меню при адаптации под планшет
//   const [leftMenu, setLeftMenu] = useState(true);

//   const path = usePathname();

//   return (
//     <html lang="en">
//       <body>
//       <Provider store={rootStore}>
//         <div className={styles.mainWrap}>
//           {/* Скрываю хедер, футер, лефтменю в зависимости от макета */}
//           {!path.includes("/admin") && (
//             <HeaderMenu
//               setPopUpAuth={setPopUpAuth}
//               setLeftMenu={setLeftMenu}
//               leftMenu={leftMenu}
//               // userData={user}
//             />
//           )}

//           <main
//             className={`${styles.container} ${styles.innerWrap} ${
//               leftMenu === true ? styles.innerWrapTrue : ""
//             }`}
//           >
//             {/* {leftMenu && <LeftMenu />} */}
//             {!(path.includes("/admin") || path.includes("/cabinet")) &&
//               leftMenu && <LeftMenu />}

//             <div className={styles.children}>{children}</div>
//           </main>

//           {!path.includes("/admin") && <Footer />}
//           {/* {!user?.token && ( */}
//           {!(path.includes("/admin") || path.includes("/cabinet"))  && (
//             <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} />
//           )}
//           {/* <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} /> */}
//         </div>
//         </Provider>
//       </body>
//     </html>
//   );
// }
