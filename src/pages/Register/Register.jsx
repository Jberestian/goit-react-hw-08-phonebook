import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import style from './register.module.css';

import { signup } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selector';

const Register = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const OnRegister = event => {
    event.preventDefault();

    const data = {
      name: event.currentTarget.elements['name'].value,
      email: event.currentTarget.elements['email'].value,
      password: event.currentTarget.elements['password'].value,
    };

    dispatch(signup(data));
  };

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form className={style.form} onSubmit={OnRegister}>
        <label htmlFor="name" className={style.label}>
          Name
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="Enter your name"
          name="name"
          required
        />
        <label htmlFor="email" className={style.label}>
          Email
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label htmlFor="password" className={style.label}>
          Password
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="Enter your pass"
          name="password"
          required
        />

        <button className={style.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
