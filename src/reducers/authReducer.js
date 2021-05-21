import ToastService from '../services/ToastService';

// Initial State
const initialState = {
  Token: null,
};
// Reducers (Modifies The State And Returns A New State)
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'SIGN_UP': {
      return {
        // State
        ...state,
        // Redux Store
        Token: action.Token,
      };
    }
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        Token: action.Token,
      };
    }
    //SignOut
    case 'LOG_OUT': {
      ToastService('success', 'Signed Out Successfully', true)
      return {
        // State
        state,
        // Redux Store
        Token: action.Token,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
