import * as types from '../types/auth';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action: { type; payload }) => {
  switch (action.type) {
    case types.GET_USER_DETAILS_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: true
      };

    case types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };

    case types.SIGN_UP_REQUEST:
      console.log("sign ",action.payload)
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        user: action.payload
      };
    case types.GET_USER_DETAILS_SUCCESS:
    case types.SIGN_IN_SUCCESS:
      // localStorage.setItem("token", action.payload?.user?.accessToken);
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case types.GET_USER_DETAILS_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };

    case types.SIGN_IN_ERROR:
    case types.LOGOUT_SUCCESS:
      console.log('loguout/failed register', action.type, action.payload);
      localStorage.clear();
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload?.message
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default authReducer;
