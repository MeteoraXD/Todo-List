import { useState } from 'react';

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

  const handleLogin = () => {
    const matchedUser = staticUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      setErrorMessage('');
      setIsAuthenticated(true);
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

//import useLogin from '@/hooks/LoginHook/index.ts';
// import TodoView from '@/components/ui/TodoList/index.tsx';