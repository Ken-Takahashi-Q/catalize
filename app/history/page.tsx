"use client";
import { Order, OrderItem } from "@/interface";
import { GetOrdersHistory } from "@/interface/db";
import { GetOrdersPayload } from "@/interface/payload";
import { RootState } from "@/store/store";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const History: React.FC = () => {
  // const dispatch = useDispatch();
  // const order = useSelector((state: RootState) => state.order);
  const [history, setHistory] = useState<GetOrdersHistory[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("");

  const handleGetOrderHistory = async () => {
    const date = new Date().toISOString();
    const getOrdersPayload: GetOrdersPayload = {
      user_id: 1,
      table_id: 1,
      table_visit: 1,
      date: date,
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/order/get_orders`,
        getOrdersPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setHistory(response.data.data);
    } catch (error) {
      console.error("Error loading history:", error);
    }
  };

  useEffect(() => {
    handleGetOrderHistory();
  }, []);

  return (
    <div className="p-2 text-black">
      {history.length > 0 &&
        history.map((order) => (
          <div
            key={order.id}
            className="order-card mb-4 p-4 bg-white rounded shadow"
          >
            <div className="order-header flex justify-between items-center mb-2 w-[400px]">
              <span className="text-lg font-bold">
                Order: {order.order_count}
              </span>
              <span className="text-sm text-gray-600">
                Order Date: {new Date(order.order_date).toLocaleString()}
              </span>
            </div>

            <div className="order-items mb-2">
              <div className="font-semibold">Items:</div>
              {order.items.map((item, index) => (
                <div key={index} className="item-details flex justify-between">
                  <span>
                    {item.quantity} × {item.menu_name_th}
                  </span>
                  <span>{item.quantity * item.price} ฿</span>
                </div>
              ))}
            </div>

            <div className="order-footer flex justify-between items-center mt-2">
              <span
                className={`px-2 py-1 rounded ${
                  order.order_status === 0
                    ? "bg-orange-100 text-orange-400"
                    : "bg-green-100 text-green-400"
                }`}
              >
                {order.order_status === 0 ? "Pending" : "Completed"}
              </span>
              <span className="">Total Price: {order.total_price} ฿</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default History;
