export enum AuthMode {
  LOGIN = 'login',
  REGISTER = 'register'
}


export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | null;
  error: string | null;
  message: string | null;
  isLoading: boolean;
}

export interface StoredUser {
  email: string;
  password: string;
  userId: string;
}


export interface CurrentUser {
  username: string;
  id: string;
}

export enum AuthActionType {
  LOGIN = 'LOGIN',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
  LOGOUT = 'LOGOUT',
}

export type AuthAction =
  | { type: AuthActionType.LOGIN; payload: { user: User } }
  | { type: AuthActionType.LOGIN_ERROR; payload: string }
  | { type: AuthActionType.REGISTER_SUCCESS; payload: { user: User } }
  | { type: AuthActionType.REGISTER_ERROR; payload: string }
  | { type: AuthActionType.LOGOUT }


export interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}