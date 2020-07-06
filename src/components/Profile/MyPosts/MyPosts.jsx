import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength15 } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));
  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.myposts}>
      <h1>Мои посты</h1>
      <AddNewPostTextFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
};

const AddNewPostTextForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        component={Textarea}
        validate={[required, maxLength15]}
        cols="40"
        rows="2"
        className={s.area__input}
        placeholder="type ur text"
      />
      <button className={s.post__send}>Добавить пост</button>
    </form>
  );
};

const AddNewPostTextFormRedux = reduxForm({
  form: 'ProfileAddNewPostTextForm',
})(AddNewPostTextForm);

export default MyPosts;
