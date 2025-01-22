import { AuthState, AuthAction, AuthActionType } from '@/data/AuthModel';

export const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  error: null,   // Ensure error is used in the reducer
  message: null,
  isLoading: false,
};

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
    default:
      return state;
  }
};
