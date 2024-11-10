import css from './LoginPage.module.css';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <h2>Вхід</h2>
      <LoginForm />
    </>
  );
};

export default LoginPage;
