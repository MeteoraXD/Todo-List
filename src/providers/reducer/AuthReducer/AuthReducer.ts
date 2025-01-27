import { AuthState, AuthAction, AuthActionType } from '@/data/AuthModel';

export const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  error: null,
  message: null,
  isLoading: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
    case AuthActionType.REGISTER_SUCCESS:
      return { ...state, isLoggedIn: true, currentUser: action.payload.user, error: null, isLoading: false };
    case AuthActionType.LOGIN_ERROR:
    case AuthActionType.REGISTER_ERROR:
      return { ...state, error: action.payload, isLoggedIn: false, currentUser: null, isLoading: false };
    case AuthActionType.LOGOUT:
      return { ...state, isLoggedIn: false, currentUser: null };
    
    default:
      return state;
  }
};

export { authReducer };
