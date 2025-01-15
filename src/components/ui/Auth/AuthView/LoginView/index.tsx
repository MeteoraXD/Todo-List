import { useState } from 'react';

interface LogInViewProps {
  onLoginSuccess?: () => void;
}
import {
  LoginWrapper, ErrorMessage, LoginInputLabel, LoginTitle, LoginForm, LoginInput, LoginButton
} from '@/components/ui/Auth/AuthView/LoginView/LoginView.css'

const LogInView: React.FC<LogInViewProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const staticUsers = [
    { email: 'user1@user.com', password: 'root12345' },
    { email: 'user2@user.com', password: 'root12345' },
    { email: 'user3@user.com', password: 'root12345' },
  ];

  const handleLogin = () => {
    const matchedUser = staticUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      setErrorMessage('');
      onLoginSuccess?.();    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className={LoginWrapper}>
      <form  className={LoginForm} >
      <h1 className={LoginTitle}>Login</h1>
      <label className={LoginInputLabel}>Email</label>
      <input
        className={LoginInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className={LoginInputLabel}>Email</label>

      <input
        className={LoginInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={LoginButton} onClick={handleLogin}>Login</button>
      {errorMessage && <p className={ErrorMessage}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LogInView;
