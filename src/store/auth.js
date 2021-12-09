
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = {isAuth: false};


const authSlice = createSlice(
  {
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
      login(state) {
        state.isAuth = true;
      },
      logout(state) {
        state.isAuth = false;
      }
    }
});

// if multiple reducers
const store = configureStore({
  reducer: {
    auth: authSlice.reducer
}
});

export const authActions = authSlice.actions;
export default authSlice.reducer;