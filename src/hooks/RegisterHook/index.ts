import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from '@tanstack/react-router';

interface FormData {
  email: string;
  password: string;
}

interface User extends FormData {
}

const useRegister = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const navigate = useNavigate();

  const AUTH_KEY = 'auth_users';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setErrorMessage('All fields are required.');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  const encodePassword = (password: string): string => btoa(password);

  const isEmailTaken = (email: string, users: User[]): boolean => {
    return users.some((user) => user.email === email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const existingUsers: User[] = JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');

    if (isEmailTaken(formData.email, existingUsers)) {
      toast.error('Email is already in use.');
      return;
    }

    const newUser: User = {
      email: formData.email,
      password: encodePassword(formData.password),
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUsers));

    setIsRegistered(true);
    navigate({ to: '/' });
    setFormData({ email: '', password: '' });
    toast.success('Registration Completed successfully.');

  };

  return {
    formData,
    errorMessage,
    isRegistered,
    handleInputChange,
    handleSubmit,
  };
};

export default useRegister;
