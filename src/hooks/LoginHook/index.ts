import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

const AUTH_KEY = 'auth_users';
const AUTH_USER_KEY = 'authUser';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_USER_KEY);
    if (storedUser) {
      setIsAuthenticated(true);
      navigate({ to: '/todoview' });
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');

    const matchedUser = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && atob(user.password) === password,
    );

    if (matchedUser) {
      setErrorMessage(null);
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ email }));
      navigate({ to: '/todoview' });
    } else {
      setErrorMessage('Invalid email or password.');
      setIsAuthenticated(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isAuthenticated,
    handleLogin,
  };
};

export default useLogin;
