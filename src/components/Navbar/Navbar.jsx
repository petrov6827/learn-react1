import React from 'react';
import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={`${s.nav}`}>
      <div className={s.nav__item}>
        <NavLink to="/profile" className={s.links} activeClassName={s.active}>
          Моя страница
        </NavLink>
      </div>
      <div className={`${s.nav__item}`}>
        <NavLink to="/dialogs" className={s.links} activeClassName={s.active}>
          Сообщения
        </NavLink>
      </div>
      <div className={`${s.nav__item}`}>
        <NavLink to="/users" className={s.links} activeClassName={s.active}>
          Пользователи
        </NavLink>
      </div>
      <div className={`${s.nav__item}`}>
        <NavLink
          to="/settings"
          className={s.links}
          activeClassName={s.settings}
        >
          Настройки
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
