import React from 'react';
import s from './../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs' + props.id;

  return (
    <div className={s.d__items + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
