"use client";
import { setOrders } from "@/redux/reducers/globalReducer";
import { RootState } from "@/redux/store/reducers";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Modal, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./menu";

export interface Cart {
  menu: number;
  qty: number;
}

export default function Order() {
  const router = useRouter();
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.globalState.orders);

  const [carts, setCarts] = useState<Cart[]>([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const handlePlusItem = (menuIndex: number) => {
    const cartItem = carts.find((cart) => cart.menu === menuIndex);
    if (cartItem) {
      setCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.menu === menuIndex ? { ...cart, qty: cart.qty + 1 } : cart
        )
      );
    } else {
      setCarts((prevCarts) => [...prevCarts, { menu: menuIndex, qty: 1 }]);
    }
  };

  const handleMinusItem = (menuIndex: number) => {
    const cartItem = carts.find((cart) => cart.menu === menuIndex);
    if (cartItem) {
      setCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.menu === menuIndex
            ? { ...cart, qty: Math.max(cart.qty - 1, 0) }
            : cart
        )
      );
    }
  };

  const handleOrder = () => {
    dispatch(setOrders([...orders, carts]));
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setShowOrderSuccess(true);
    }, 500);

    setTimeout(() => {
      router.push("/history");
    }, 1500);
  };

  useEffect(() => {
    console.log(carts);
  }, [carts]);

  return (
    <main className="flex flex-col items-center min-h-screen text-white">
      <Menu
        carts={carts}
        plusItem={(menuIndex) => handlePlusItem(menuIndex)}
        minusItem={(menuIndex) => handleMinusItem(menuIndex)}
      />
      <Button onClick={handleOrder}>สั่งอาหาร</Button>
      <Modal open={showOrderSuccess} closable={false} footer={null} centered>
        <div className="flex justify-center items-center h-full">
          {showSpinner && <Spin indicator={<LoadingOutlined spin />} />}

          {showOrderSuccess && (
            <span className="text-xl font-bold">เราได้รับออร์เดอร์แล้ว</span>
          )}
        </div>
      </Modal>
    </main>
  );
}
