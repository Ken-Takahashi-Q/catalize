import { Cart } from "@/app/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  orders: Cart[][];
}

const initialState: OrderState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Cart[]>) => {
      state.orders.push(action.payload);
    },
    setOrders: (state, action: PayloadAction<Cart[][]>) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
