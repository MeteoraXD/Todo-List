import React, { useState } from 'react';
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
  TitleWrapper, LoginLabelInputWrapper,
  PasswordToggleWrapper, ToggleButton,
} from '@/features/Auth/AuthView/LoginView/LoginView.css.ts';
import EyeClosedIcon from '@/components/icons/EyeclosedIcon';
import EyeOpenIcon from '@/components/icons/EyeOpenIcon';

const LogInView: React.FunctionComponent = () => {
  const { register, handleSubmit, onSubmit, errors } = useLogin();
  const [PasswordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!PasswordVisibility);
  };

  return (
    <div className={LoginWrapper}>
      <form className={LoginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={TitleWrapper}>
          <h1 className={LoginTitle}>Login</h1>
          <h3 className={LoginSubHeading}>Enter your credentials to login.</h3>
        </div>
        <div className={LoginLabelInputWrapper}>
          <label className={LoginInputLabel}>Email</label>
          <input
            className={LoginInput}
            type="email"
            placeholder="Enter your email"
            {...register('username')}
          />
          {errors.username && (
            <p className={ErrorMessage}>{errors.username.message}</p>
          )}
        </div>
        <div className={LoginLabelInputWrapper}>
          <label className={LoginInputLabel}>Password</label>
          <div className={PasswordToggleWrapper}>
            <input
              className={LoginInput}
              type={PasswordVisibility ? 'text' : 'password'}
              placeholder="Enter your password"
              {...register('password')}
            />
            <button
              type="button"
              className={ToggleButton}
              onClick={togglePasswordVisibility}
            >
              {PasswordVisibility ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
          {errors.password && (
            <p className={ErrorMessage}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={LoginButton}>
          Login
        </button>
        <Link to={'/registration'}>Don't have an account?</Link>
      </form>
    </div>
  );
};

export default LogInView;
