import { Flex } from "antd";
import Image from "next/image";
import MinusButton from "../button/minus";
import PlusButton from "../button/plus";
import { MenuItem } from "@/interface";

interface MenuCardProps {
  menu: MenuItem;
  qty: number;
  plusItem: (menuIndex: number) => void;
  minusItem: (menuIndex: number) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({
  menu,
  qty,
  plusItem,
  minusItem,
}) => {
  return (
    <div className=" flex flex-col w-60 min-h-48 bg-gray-600 rounded overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="example"
          src={menu.image}
          fill
          className="object-cover"
          sizes="60"
          priority
        />
        <Flex
          gap={8}
          className="absolute bottom-1 right-1 ml-auto p-1 h-fit bg-gray-200 rounded-full shadow"
        >
          {qty > 0 && (
            <>
              <MinusButton
                onClick={() => minusItem(menu.menu_id)}
                disable={qty === 0}
              />
              <span className="w-4 text-center text-black">{qty}</span>
            </>
          )}
          <PlusButton
            onClick={() => plusItem(menu.menu_id)}
            disable={qty >= 10}
          />
        </Flex>
      </div>
      <Flex className="flex justify-between items-center p-2 h-fit">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {menu.menu_name_th}
        </h1>
        {menu.price}.-
      </Flex>
    </div>
  );
};

export default MenuCard;
