import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../reducers/ordersReducer";

const store = configureStore({
  reducer: {
    globalState: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
