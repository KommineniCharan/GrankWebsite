import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import shoppingReducer from "./slices/shoppingSlice";
import shoppingsecuReducer from "./slices/shoppingsecuSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    shopping: shoppingReducer,
    shoppingsecu: shoppingsecuReducer,
  },
});
export default store;
