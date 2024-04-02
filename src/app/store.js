import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./api/userSlice";
export const store = configureStore({
  reducer: {
    userData: userReducer,
  },
});
