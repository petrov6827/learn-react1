import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength10 } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <div className={s.dialogs}>
      <h1>Сообщения</h1>
      <div className={s.d__content}>
        <div className={s.d__friends}>{dialogsElements}</div>
        <div className={s.d__messages}>
          <div>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.input}>
      <Field
        name="newMessageBody"
        component={Textarea}
        validate={(required, maxLength10)}
        cols="40"
        rows="2"
        placeholder="enter your message"
        className={s.input}
      />
      <button className={s.sendMessage}>Отправить</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);

export default Dialogs;
