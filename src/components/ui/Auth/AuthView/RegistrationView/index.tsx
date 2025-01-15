import React, { useState } from 'react';

import {
  RegistrationWrapper,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmitButton,
  RegistrationLabel,
} from '@/components/ui/Auth/AuthView/RegistrationView/RegistrationView.css';
import { ErrorMessage } from '@/components/ui/Auth/AuthView/LoginView/LoginView.css.ts';

const RegistrationView = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage('Email and Password are required.');

    }
  };

  return (
    <div className={RegistrationWrapper}>
      <form className={RegistrationForm} onSubmit={handleSubmit}>
        <h2 className={RegistrationTitle}>Register</h2>

        <label className={RegistrationLabel}>
          First Name: </label>

        <input
          className={RegistrationInput}
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label className={RegistrationLabel}>
          Last Name: </label>

        <input
          className={RegistrationInput}
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <label className={RegistrationLabel}>
          Email: </label>

        <input
          className={RegistrationInput}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label className={RegistrationLabel}>
          Password: </label>

        <input
          className={RegistrationInput}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {errorMessage && <p className={ErrorMessage}>{errorMessage}</p>}


        <button className={RegistrationSubmitButton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationView;
