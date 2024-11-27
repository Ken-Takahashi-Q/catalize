"use client";
import { setOrders } from "@/redux/reducers/globalReducer";
import { RootState } from "@/redux/store/reducers";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Modal, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuSection from "./menu";
import { CartItem, MenuItem } from "@/interface";

export default function Order() {
  const router = useRouter();
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.globalState.orders);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const handlePlusItem = (menuIndex: number) => {
    const cartItem = cart.find((item) => item.menu_id === menuIndex);
    if (cartItem) {
      setCart((prevCarts) =>
        prevCarts.map((item) =>
          item.menu_id === menuIndex
            ? { ...item, qty: Math.min(item.qty + 1, 10) }
            : item
        )
      );
    } else {
      setCart((prevCarts) => [...prevCarts, { menu_id: menuIndex, qty: 1 }]);
    }
  };

  const handleMinusItem = (menuIndex: number) => {
    const cartItem = cart.find((item) => item.menu_id === menuIndex);
    if (cartItem) {
      setCart(
        (prevCarts) =>
          prevCarts
            .map((item) =>
              item.menu_id === menuIndex ? { ...item, qty: item.qty - 1 } : item
            )
            .filter((item) => item.qty > 0) // Remove items with qty <= 0
      );
    }
  };

  const handleOrder = () => {
    dispatch(setOrders([...orders, cart]));
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setShowOrderSuccess(true);
    }, 500);

    setTimeout(() => {
      router.push("/history");
    }, 1500);
  };

  const handleLoadMenu = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/menu`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch menus: ${response.statusText}`);
      }

      const menus = await response.json();
      setMenu(menus?.data);
      console.log(menus);
    } catch (error) {
      console.error("Error loading menus:", error);
    }
  };

  useEffect(() => {
    handleLoadMenu();
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <main className="flex flex-col items-center min-h-screen text-white">
      <MenuSection
        menus={menu}
        cart={cart}
        plusItem={(menuIndex: number) => handlePlusItem(menuIndex)}
        minusItem={(menuIndex: number) => handleMinusItem(menuIndex)}
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
