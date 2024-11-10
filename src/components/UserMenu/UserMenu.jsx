import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/slice';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.logoutWrapper}>
      <span className={css.greet}>Привіт, {user.name}</span>
      <button type="button" onClick={handleLogout}>
        Вийти
      </button>
    </div>
  );
};

export default UserMenu;
