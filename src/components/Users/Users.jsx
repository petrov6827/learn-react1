import React from 'react';
import s from './Users.module.scss';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';

let Users = ({follow, unfollow, users, currentPage, selectedPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
  return (
    <div className={s.users}>
      <h1> Пользователи </h1>
      <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} onPageChanged={onPageChanged} pageSize={pageSize}/>
      <div>
        {users.map(u=> <User user={u} key={u.id} 
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow} follow={props.follow}/>)}
      </div>
    </div>
  );
};

export default Users;
