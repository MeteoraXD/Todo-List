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
        <h1 className={LoginTitle}>Login</h1>
        <h3 className={LoginSubHeading}>Enter your credentials to Login.</h3>
        <label className={LoginInputLabel}>Email</label>
        <input
          className={LoginInput}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={LoginInputLabel}>Password</label>
        <input
          className={LoginInput}
          type="password"
          placeholder="Password"
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
