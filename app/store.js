import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import offerReducer from '../features/offerSlice';

export default configureStore({
  reducer: {
    auth: userReducer,
    offer: offerReducer,
  },
});
