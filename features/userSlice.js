import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    isConnected: false,
    mail: null,
    role_id: null,
    role_name: null,
  },
  reducers: {
    CONNECT: (state, action) => {
      const { isConnected, firstName, lastName, mail, role_id, id } =
        action.payload;
      state.id = id;
      state.isConnected = isConnected;
      state.firstName = firstName;
      state.lastName = lastName;
      state.mail = mail;
      state.role_id = role_id;
      state.role_name = action.payload.Role.Name;
    },
    DISCONNECT: (state) => {
      state.id = null;
      state.isConnected = false;
      state.firstName = null;
      state.lastName = null;
      state.mail = null;
      state.role_id = null;
      state.role_name = null;
    },
  },
});

export const { CONNECT, DISCONNECT } = userSlice.actions;

export default userSlice.reducer;
