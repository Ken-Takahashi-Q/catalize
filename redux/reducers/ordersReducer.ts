import { Cart } from "@/app/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  orders: Cart[];
}

const initialState: OrderState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Cart[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
