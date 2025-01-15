import { AuthState, AuthAction, AuthActionType } from '@/data/AuthModel/index.ts';
export const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  error: null,
  message: null,
  isLoading: false,
};

// Reducer function to manage authentication actions
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
        error: null,
        message: 'Login successful!',
        isLoading: false,
      };
    case AuthActionType.LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
        message: null,
        isLoading: false,
      };
    case AuthActionType.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
        error: null,
        message: 'Registration successful!',
        isLoading: false,
      };
    case AuthActionType.REGISTER_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
        message: null,
        isLoading: false,
      };
    case AuthActionType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
        error: null,
        message: null,
        isLoading: false,
      };
    case AuthActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AuthActionType.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
        error: null,
      };
    default:
      return state;
  }
};
