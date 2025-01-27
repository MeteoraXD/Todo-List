import { CurrentUser, StoredUser } from '@/data/AuthModel';

export const getUsers = (): StoredUser[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: StoredUser[]): void => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getCurrentUser = (): CurrentUser | null => {
  const user = localStorage.getItem('currentUser');
  const parsed = user ? JSON.parse(user) : null;
  return parsed?.user || parsed;
};

export const saveCurrentUser = (user: CurrentUser): void => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};