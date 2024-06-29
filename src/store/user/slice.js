"use client";
import { createSlice } from '@reduxjs/toolkit';
// import { AuthData } from './effects';

const initialState = {
  isLoading: false,
  user: {
    data: {
      avatar: '', // здесь можно дефолную картинку вставить
      email: '',
      fullName: '', // здесь можно дефолное имя написать
      id: null,
      role: '',
    },
    token: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearUserStore: () => initialState,
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(AuthData.pending, state => {
  //       state.isLoading = true;
  //     })
  //     .addCase(AuthData.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.user = action.payload;
  //     })
  //     .addCase(AuthData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message || 'Что-то пошло не так';
  //     });
  // },
  selectors: {
    getUser: state => state.user,
    getUserIsLoading: state => state.isLoading,
    getUserToken: state => state.token,
    getUserAvatar: state => state.user.data.avatar,
    getUserFullName: state => state.user.data.fullName,
    getUserRole: state => state.user.data.role,
  },
});

export const userActions = userSlice.actions;

export const { getUser, getUserAvatar, getUserToken, getUserFullName, getUserRole } = userSlice.selectors;
// console.log(getUserFullName)

// console.log(userActions.clearUserStore());

// console.log(userSlice);

// selectors: {
//   getUserRole: state => state?.user?.data.role,
//   {
//     if (state) {
//       if (state.user) {
//         if (state.user.data) {
//           return state.user.data.role;
//         }
//       }
//     }
//   },
// },

// Можно initialState  к такому виду привести, без вложенностей, чтобы не искать глубоко внутри нужные данные.
// T.e. будет вместо state => state.user.data.fullName, будет: state => state.fullName
// Но тогда в fetch нужно будет обрабатывать приходящий объект с вложенностями с сервера

// const initialState = {
//   isLoading: false,
//   token: '',
//   avatar: '',
//   email: '',
//   fullName: '',
//   id: null,
//   role: '',
// };
