import React, { createContext, useReducer } from 'react';


import { AuthAction, AuthState } from '@/data/AuthModel';
import { initialState, authReducer } from '@/providers/reducer/AuthReducer'; // Assuming you have the reducer

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};