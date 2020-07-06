import React from 'react';
import s from './Post.module.scss';

const Post = (props, likesCount) => {
  return (
    <div className={s.post__item}>
      <img
        alt="аватарка"
        src="https://i.pinimg.com/736x/ce/ff/af/ceffaf6a57c0935cda8d56d4db594d02.jpg"
      />
      {props.message}
      <span className={s.post__like}>{props.likesCount} like</span>
    </div>
  );
};

export default Post;
