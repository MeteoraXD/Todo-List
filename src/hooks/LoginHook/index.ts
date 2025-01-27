import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginFormData, LoginSchema } from '@/data/Schema/LoginSchema/LoginSchema.ts';

const AUTH_KEY = 'auth_users';
export const AUTH_USER_KEY = 'authUser';

const useLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_USER_KEY);
    if (storedUser) {
      navigate({ to: '/todoview' });
    }
  }, [navigate]);

  const validateUser = (
    email: string,
    password: string,
  ): { name: string; email: string } | null => {
    const users: {
      name: string;
      email: string;
      password: string;
    }[] = JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');

    const matchedUser = users.find(
      (user) => user.email === email && atob(user.password) === password,
    );

    return matchedUser || null;
  };

  const onSubmit: SubmitHandler<LoginFormData> = ({ username: email, password }) => {
    const user = validateUser(email, password);

    if (user) {
      localStorage.setItem(
        AUTH_USER_KEY,
        JSON.stringify({
          name: user.name,
          email: user.email,
        }),
      );

      toast.success('Successfully logged in');
      navigate({ to: '/todoview' });
    } else {
      toast.error('Invalid email or password');
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useLogin;
