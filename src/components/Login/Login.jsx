import React from 'react';
import s from './login.module.scss';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { requiredLogin, requiredPassword } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        <label htmlFor="login"></label>
        <Field
          className={s.item}
          rows="1"
          name="email"
          placeholder="Email"
          component={Textarea}
          type="input"
          validate={[requiredLogin]}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <Field
          className={s.item}
          rows="1"
          name="password"
          placeholder="Password"
          component={Textarea}
          type="input"
          validate={[requiredPassword]}
        />
      </div>
      <div>
        <Field name="remember" component="input" type="checkbox" />
        <label htmlFor="чекбокс">запомнить меня</label>
      </div>
      {props.error && <div className={s.form__error}>{props.error}</div>}
      <div>
        <button className={s.button}>Войти</button>
        {/* <Button variant="contained" color="secondary">
          Hello World
        </Button> */}
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div className={s.login}>
      <h1>Вход</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
