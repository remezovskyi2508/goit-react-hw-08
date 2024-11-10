import css from './RegistrationPage.module.css';
import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <>
      <h2>Реєстрація</h2>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
