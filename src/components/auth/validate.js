const nameRegexp = /^([а-яёА-яЁ_-]|[a-zA-Z_-]){2,}/;
export const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const telRegexp = /^((\+7|7|8)+([0-9]){10})$/;

export const validateName = (value, setNameError) => {
  const isValid = value.match(nameRegexp);
  if (isValid) {
    setNameError('');
  } else {
    setNameError('Это не похоже на имя');
  }
};

export const validateEmail = (value, setEmailError) => {
  const isValid = value.match(emailRegex);
  if (isValid) {
    setEmailError('');
  } else {
    setEmailError('Это не похоже на емейл');
  }
};

export const validatePassword = (value, setPasswordError) => {
  const isValid = value.length > 2 && value.length < 8;
  if (isValid) {
    setPasswordError('');
  } else {
    setPasswordError('Это не похоже на пароль');
  }
};

export const validateTel = (value, setTelError) => {
  const isValid = value.match(telRegexp);
  if (isValid) {
    setTelError('');
  } else {
    setTelError('Это не похоже на телефон');
  }
};
