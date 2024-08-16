import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterrSlice';

const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export default store;
