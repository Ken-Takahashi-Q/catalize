import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice"; // Import the default export of the slice

export const store = configureStore({
  reducer: {
    order: orderReducer, // State will be available at state.order
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
