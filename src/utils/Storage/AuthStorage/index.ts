import { User } from '@/data/AuthModel';

const getAuth = (key: string): User[] => {
  const users = localStorage.getItem(key);
  return users ? JSON.parse(users) : [];
};

const saveAuth = (key: string, users: User[]): void => {
  localStorage.setItem(key, JSON.stringify(users));
};

export { getAuth, saveAuth };