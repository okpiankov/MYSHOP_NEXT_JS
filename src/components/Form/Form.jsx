'use client'
import { useState } from 'react';
import { AuthPage } from '../../app/auth/page';
import { RegisterPage } from '../../app/register/page';


export const Form = () => {
  const [form, setForm] = useState('login');
// В setForm можно передавать любую строку например: 'register' т.к. условный рендеринг

  return <>{form === 'login' ? <AuthPage setForm={setForm} /> : <RegisterPage setForm={setForm} />}</>;
};
