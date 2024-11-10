import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav className={css.mainNav}>
        <NavLink to="/">Головна</NavLink>
        {isLogin ? <NavLink to="/contacts">Контакти</NavLink> : null}
      </nav>
    </>
  );
};

export default Navigation;
