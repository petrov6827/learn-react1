import React from 'react';
import s from './FormsControls.module.scss';

export const Textarea = ({
  input,
  type,
  meta: { touched, error, warning },
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={s.form__control + ' ' + (hasError ? s.error : '')}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};
