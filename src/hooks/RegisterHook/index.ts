import { useNavigate } from '@tanstack/react-router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { User } from '@/data/AuthModel';
import { RegisterFormData, RegistrationSchema } from '@/data/Schema/RegistrationSchema/RegisterSchema.ts';


const AUTH_KEY = 'auth_users';

const useRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegistrationSchema),
  });

  const isEmailTaken = (email: string, users: User[]): boolean => {
    return users.some((user) => user.email === email);
  };

  const handleRegistration = (data: RegisterFormData) => {
    const existingUsers: User[] = JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');

    if (isEmailTaken(data.username, existingUsers)) {
      toast.error('Email is already in use.');

      return;
    }

    const newUser: { name: string, email: string; password: string } = {
      name: data.name,
      email: data.username,
      password: btoa(data.password),
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUsers));

    reset();
    toast.success('Registration completed successfully.');
    navigate({ to: '/' });
  };

  return {
    register,
    handleSubmit: handleSubmit(handleRegistration),
    errors,
  };
};

export default useRegister;
