# Интернет-магазин с админкой и личный кабинетом
### Деплой: https://myshop-next-js.vercel.app/

###  Используемые технологии при разработке: html, css, JavaScript, React, NEXT_JS, Redux
### Сервер: https://mokky.dev

### Функционал:
- Отдельный layout для личного кабинета и админки,
- Регистрация и авторизация, защищенные роуты, роли пользователей,
- В админке реализованны - загрузка, редактирование и удаление товаров, пользователей, редактирование заказов. Запросы GET, POST, PATCH, DELETE,
- Оформленные заказы в админке можно просматривать, они рендерятся ввиде списка,
- Реализован поиск товаров на сервере,
- Страница с оформленными заказами реализована через связь двух ресурсов /orders?_relations=users. Заказу присваивается user_id, 
- В корзине можно изменить количество товара или удалить товар,
- При рендеринге карточек товаров используется динамический роутинг. 2 вида карточек товаров мини и стандарт.
- Кастомная валидация форм,
- Форма с авторизацией и регистрацией реализованна через PopUp,
- Модульные стили,
- Адаптивная верстка- под планшет max-width: 991px, - под смартфон max-width: 430px,
- Используются fetch, async/await, axios,
- Redux Toolkit, Redux persist. Товары в корзине  и данные пользователей сохраняются в localStorage,
- Есть возможность подключить запись напрямую в localStorage товаров в корзине  и  данных пользователей без использования Redux, Redux persist

### Доступ в админку:
В админку могут попасть только пользователи с ролью админа.\
Тестовые админские логин и пароль:\
логин: admin@test.com\
пароль: 123

### Доступ в личный кабинет:
Тестовые пользовательские логин и пароль:\
логин: user@test.com\
пароль: 123\
Либо зарегистрируйте своего пользователя

### Установка проекта:
Для запуска на локальной машине необходимо:\
Установить npm зависимости:\
npm install\
Запустить в режиме разработки:\
npm run dev\
Если все прошло успешно, проект будет запущен на http://localhost:3000
