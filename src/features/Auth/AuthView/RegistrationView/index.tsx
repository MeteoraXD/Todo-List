import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import useRegister from '@/hooks/RegisterHook';
import {
  RegistrationWrapper,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmitButton,
  RegistrationLabel,
  ErrorResponseMessage,
  RegistrationSubHeading,
  RegisterLabelInputWrapper,
  PasswordToggleWrapper,
  ToggleButton,
} from '@/features/Auth/AuthView/RegistrationView/RegistrationView.css.ts';
import EyeClosedIcon from '@/components/icons/EyeclosedIcon';
import EyeOpenIcon from '@/components/icons/EyeOpenIcon';

const RegistrationView = () => {
  const { register, handleSubmit, errors } = useRegister();
  const [PasswordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!PasswordVisibility);
  };

  return (
    <div className={RegistrationWrapper}>
      <form className={RegistrationForm} onSubmit={handleSubmit}>
        <h2 className={RegistrationTitle}>Register</h2>
        <h3 className={RegistrationSubHeading}>
          Please register with your credentials.
        </h3>

        <div className={RegisterLabelInputWrapper}>
          <label className={RegistrationLabel} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={RegistrationInput}
            type="text"
            placeholder="Enter your name"
            {...register('name')}
          />
          {errors.name && (
            <p className={ErrorResponseMessage}>{errors.name.message}</p>
          )}
        </div>

        <div className={RegisterLabelInputWrapper}>
          <label className={RegistrationLabel} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className={RegistrationInput}
            type="email"
            placeholder="Enter your email"
            {...register('username')}
          />
          {errors.username && (
            <p className={ErrorResponseMessage}>{errors.username.message}</p>
          )}
        </div>

        <div className={RegisterLabelInputWrapper}>
          <label className={RegistrationLabel} htmlFor="password">
            Password
          </label>
          <div className={PasswordToggleWrapper}>
            <input
              id="password"
              className={RegistrationInput}
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
            <p className={ErrorResponseMessage}>{errors.password.message}</p>
          )}
        </div>

        <button className={RegistrationSubmitButton} type="submit">
          Register
        </button>

        <Link to="/">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default RegistrationView;
