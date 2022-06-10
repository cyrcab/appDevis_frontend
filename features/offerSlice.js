import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const offerSlice = createSlice({
  name: 'offerList',
  initialState,
  reducers: {
    GET: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { GET } = offerSlice.actions;

export default offerSlice.reducer;
