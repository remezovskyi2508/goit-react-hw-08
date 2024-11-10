import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => (
  <nav className={css.authNav}>
    <NavLink to="/register">Реєстрація</NavLink>
    <NavLink to="/login">Увійти</NavLink>
  </nav>
);

export default AuthNav;
