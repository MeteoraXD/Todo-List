import React from 'react';
import { Link } from '@tanstack/react-router';

import useLogin from '@/hooks/LoginHook';
import {
  LoginWrapper,
  ErrorMessage,
  LoginInputLabel,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginSubHeading,
  TitleWrapper,
} from '@/components/ui/Auth/AuthView/LoginView/LoginView.css';


const LogInView: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    handleLogin,
  } = useLogin();

  return (
    <div className={LoginWrapper}>


      <form className={LoginForm} onSubmit={handleLogin}>
        <div className={TitleWrapper}>
          <h1 className={LoginTitle}>Login</h1>
          <h2 className={LoginSubHeading}>Enter your credentials to Login.</h2>
        </div>
        <label className={LoginInputLabel}>Email</label>
        <input
          className={LoginInput}
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={LoginInputLabel}>Password</label>
        <input
          className={LoginInput}
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={LoginButton}>
          Login
        </button>
        {errorMessage && <p className={ErrorMessage}>{errorMessage}</p>}
        <Link to={'/registration'}>Dont have an account?</Link>
      </form>

    </div>
  );
};

export default LogInView;
