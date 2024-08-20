import { Cart } from "@/app/order";
import { Flex } from "antd";
import Image from "next/image";
import MinusButton from "../button/minus";
import PlusButton from "../button/plus";

interface MenuCardProps {
  menuIndex: number;
  menuImage: string;
  menuName?: string;
  cartItem: Cart;
  plusItem: (menuIndex: number) => void;
  minusItem: (menuIndex: number) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({
  menuIndex,
  menuImage,
  menuName,
  cartItem,
  plusItem,
  minusItem,
}) => {
  return (
    <div className=" flex flex-col w-52 min-h-52 bg-gray-600 rounded overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="example"
          src={menuImage}
          fill
          className="object-cover"
          sizes="24"
          priority
        />
        <Flex
          gap={8}
          className="absolute right-1 bottom-1 ml-auto p-2 bg-gray-100 rounded-full"
        >
          <MinusButton
            onClick={() => minusItem(menuIndex)}
            disable={cartItem.qty === 0}
          />
          <span className="w-4 text-center text-black">
            {cartItem.qty > 0 && cartItem.qty}
          </span>
          <PlusButton onClick={() => plusItem(menuIndex)} />
        </Flex>
      </div>
      <h1 className="p-2">{menuName}</h1>
    </div>
  );
};

export default MenuCard;
