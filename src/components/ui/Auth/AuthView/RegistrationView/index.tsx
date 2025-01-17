import { Link } from '@tanstack/react-router';

import useRegister from '@/hooks/RegisterHook';
import {
  RegistrationWrapper,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmitButton,
  RegistrationLabel,
  SuccessResponseMessage,
  ErrorResponseMessage,
} from '@/components/ui/Auth/AuthView/RegistrationView/RegistrationView.css';

const RegistrationView = () => {
  const { formData, errorMessage, isRegistered, handleInputChange, handleSubmit } = useRegister();

  return (
    <div className={RegistrationWrapper}>
      <form className={RegistrationForm} onSubmit={handleSubmit}>
        <h2 className={RegistrationTitle}>Register</h2>


        <label className={RegistrationLabel}>Email:</label>
        <input
          className={RegistrationInput}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label className={RegistrationLabel}>Password:</label>
        <input
          className={RegistrationInput}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {errorMessage && <p className={ErrorResponseMessage}>{errorMessage}</p>}

        {isRegistered && <p className={SuccessResponseMessage} style={{ color: 'green' }}>Registration successful!</p>}

        <button className={RegistrationSubmitButton} type="submit">
          Register
        </button>

      </form>

      <Link to={'/'}>
        Login
      </Link>
    </div>
  );
};

export default RegistrationView;
