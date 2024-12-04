import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderItem } from "@/interface";
import { RootState } from "../store";

const initialValue: Order = { order: [] };

const orderSlice = createSlice({
  name: "order",
  initialState: initialValue,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderItem>) => {
      state.order.push(action.payload);
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter(
        (item) => item.menu_id !== action.payload
      );
    },
    setOrders: (state, action: PayloadAction<OrderItem[]>) => {
      state.order = action.payload;
    },
  },
});

export default orderSlice.reducer;
export const { addOrder, removeOrder, setOrders } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order.order;
