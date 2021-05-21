// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import { authReducer } from './authReducer';
import { otpReducer } from './otpReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  otpReducer: otpReducer
});
// Exports
export default rootReducer;
