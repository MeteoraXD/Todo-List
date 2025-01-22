import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'react-toastify';

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
      // toast.success('We have sent you a new code.');
      navigate({ to: '/todoview' });
    }
  }, [navigate]);

  const validateUser = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');

    return users.find((user: { email: string; password: string }) => {
      return user.email === email && atob(user.password) === password; // This is for demonstration only. Replace with a secure method.
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedUser = validateUser(email, password);

    if (matchedUser) {
      setErrorMessage(null);
      setIsAuthenticated(true);

      localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ email }));

      navigate({ to: '/todoview' });
      toast.success('Successfully logged in');
    } else {
      toast.error(
        'Invalid email or password');
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
