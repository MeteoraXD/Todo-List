import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

interface User {
  email: string;
  password: string;

}

const staticUsers: User[] = [
  { email: 'user1@user.com', password: 'root12345' },
  { email: 'user2@user.com', password: 'root12345' },
  { email: 'user3@user.com', password: 'root12345' },
];

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();


    const matchedUser = staticUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (matchedUser) {
      setErrorMessage('');
      navigate({ to: '/todoview' });
      setIsAuthenticated(true);
      localStorage.setItem('authUser', JSON.stringify({ email }));
      const encodedPassword = btoa(password);
      localStorage.setItem('password', encodedPassword);
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
