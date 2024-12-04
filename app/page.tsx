"use client";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Modal, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuSection from "./menu";
import { Order, OrderItem, MenuCategory, MenuItem } from "@/interface";
import { RootState } from "@/store/store";
import { setOrders } from "@/store/features/orderSlice";
import { OrderPayload } from "@/interface/payload";
import axios from "axios";

const OrderApp = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  // const orders: Order = useSelector((state: RootState) => state.order);

  const [cart, setCart] = useState<OrderItem[]>([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [menuCat, setMenuCat] = useState<MenuCategory[]>([]);

  const handlePlusItem = (menuIndex: number) => {
    const menuItem = menu.find((item) => item.menu_id === menuIndex);
    const cartItem = cart.find((item) => item.menu_id === menuIndex);

    if (menuItem) {
      if (cartItem) {
        setCart((prevCarts) =>
          prevCarts.map((item) =>
            item.menu_id === menuIndex
              ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
              : item
          )
        );
      } else {
        setCart((prevCarts) => [
          ...prevCarts,
          {
            menu_id: menuIndex,
            menu_name_th: menuItem.menu_name_th,
            menu_name_en: menuItem.menu_name_en,
            price: menuItem.price,
            category: menuItem.category,
            status: menuItem.status,
            image: menuItem.image,
            quantity: 1,
          },
        ]);
      }
    }
  };

  const handleMinusItem = (menuIndex: number) => {
    const cartItem = cart.find((item) => item.menu_id === menuIndex);
    if (cartItem) {
      setCart(
        (prevCarts) =>
          prevCarts
            .map((item) =>
              item.menu_id === menuIndex
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0) // Remove items with qty <= 0
      );
    }
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
    } catch (error) {
      console.error("Error loading menus:", error);
    }
  };

  const handleLoadMenuCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/category`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch menus: ${response.statusText}`);
      }

      const menuCat = await response.json();
      setMenuCat(menuCat?.data);
    } catch (error) {
      console.error("Error loading menus:", error);
    }
  };

  const handleCreateOrder = async () => {
    const orderPayload: OrderPayload = {
      user_id: 1,
      table_id: 1,
      table_visit: 1,
      items: cart,
    };

    // dispatch(setOrders(cart));
    setShowSpinner(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/order/create_order`,
        orderPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setShowSpinner(false);
      setShowOrderSuccess(true);
      setTimeout(() => {
        router.push("/history");
      }, 1500);
    } catch (error) {
      console.error("Error loading menus:", error);
    }
  };

  useEffect(() => {
    handleLoadMenu();
    handleLoadMenuCategory();
  }, []);

  return (
    <main className="flex flex-col items-center text-white">
      <MenuSection
        menus={menu}
        menuCat={menuCat}
        cart={cart}
        plusItem={(menuIndex: number) => handlePlusItem(menuIndex)}
        minusItem={(menuIndex: number) => handleMinusItem(menuIndex)}
      />
      <Button onClick={handleCreateOrder}>สั่งอาหาร</Button>
      <Modal open={showOrderSuccess} closable={true} footer={null} centered>
        <div className="flex justify-center items-center h-full">
          {showSpinner && <Spin indicator={<LoadingOutlined spin />} />}

          {showOrderSuccess && (
            <span className="text-xl font-bold">เราได้รับออร์เดอร์แล้ว</span>
          )}
        </div>
      </Modal>
    </main>
  );
};

export default OrderApp;
