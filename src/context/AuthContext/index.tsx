import React, { createContext, useContext } from 'react';

import { AuthAction, AuthState } from '@/data/AuthModel';

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return {
      state: {}, dispatch: () => {
      },
    };
  }
  return context;
};

export default useAuth;