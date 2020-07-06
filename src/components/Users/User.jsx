import React from 'react';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../src/assets/images/user.png';

export const User = ({user, followingInProgress, follow, unfollow}) => {
    return  <div className={s.user__item} >
                <div>
                  <NavLink to={'profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                      className={s.img} alt="аватарка" />
                  </NavLink>
                  <div>
                    {user.followed ? (
                      <button
                        disabled={followingInProgress.some((id) => id === user.id)}
                        onClick={() => {unfollow(user.id);}}>
                        Отписаться
                      </button>
                    ) : (
                      <button disabled={followingInProgress.some((id) => id === user.id)}
                        onClick={() => {follow(user.id);}}>
                        Подписаться
                      </button>
                    )}
                  </div> 
                </div>
                <div className={s.about}>{user.name}</div>
                <div className={s.about}>{user.status}</div>
                <div className={s.about}>{user.photos.small}</div>
            </div>
}