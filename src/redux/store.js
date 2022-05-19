import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import categoryReducer from "./reducers/categorySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
  },
});
