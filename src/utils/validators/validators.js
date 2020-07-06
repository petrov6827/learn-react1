export const required = (value) => (value ? undefined : 'Введите текст');
export const requiredLogin = (value) => (value ? undefined : 'Введите логин');
export const requiredPassword = (value) =>
  value ? undefined : 'Введите пароль';
export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Должно быть не более ${max} символов`
    : undefined;
export const maxLength10 = maxLength(10);
export const maxLength15 = maxLength(15);
