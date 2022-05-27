import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: null,
    isConnected: false,
  },
  reducers: {
    CONNECT: (state, action) => {
      const { userName, isConnected } = action.payload;
      state.isConnected = isConnected;
      state.userName = userName;
    },
    DISCONNECT: (state) => {
      state.userName = null;
      state.isConnected = false;
    },
  },
});

export const { CONNECT, DISCONNECT } = userSlice.actions;

export default userSlice.reducer;
