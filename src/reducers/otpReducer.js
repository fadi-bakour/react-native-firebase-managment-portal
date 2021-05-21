
// Initial State
const initialState = {
  OTP: null,
};
// Reducers (Modifies The State And Returns A New State)
export const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    // generate otp
    case 'SAVE_OTP': {
      return {
        // State
        ...state,
        // Redux Store
        OTP: action.OTP,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
