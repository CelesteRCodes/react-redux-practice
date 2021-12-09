
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// if multiple reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
}
});

export default store;