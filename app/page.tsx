"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import History from "./history/page";
import Order from "./order";

export default function Home() {
  return (
    <Provider store={store}>
      <Order />
      <History />
    </Provider>
  );
}
