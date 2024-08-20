"use client";
import { RootState } from "@/redux/store/reducers";
import { useSelector } from "react-redux";

const History: React.FC = () => {
  const orders = useSelector((state: RootState) => state.globalState.orders);

  return (
    <div className="flex flex-col p-4">
      History CART {JSON.stringify(orders)}
    </div>
  );
};

export default History;
