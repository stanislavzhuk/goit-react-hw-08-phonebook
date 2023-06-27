import { createSlice } from "@reduxjs/toolkit";
import { refreshUser, userLogIn, userLogOut, userRegistration } from "./authThunk";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleRejected = state => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userRegistration.pending, handlePending)
      .addCase(userRegistration.fulfilled, handleFulfilled)
      .addCase(userRegistration.rejected, handleRejected)

      .addCase(userLogIn.pending, handlePending)
      .addCase(userLogIn.fulfilled, handleFulfilled)
      .addCase(userLogIn.rejected, handleRejected)

      .addCase(userLogOut.pending, handlePending)
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(userLogOut.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;