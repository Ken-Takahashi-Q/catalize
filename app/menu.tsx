import MenuCard from "@/components/menu";
import { menus } from "../utils/menuName";
import { Cart } from "./order";

interface MenuProps {
  carts: Cart[];
  plusItem: (menuIndex: number) => void;
  minusItem: (menuIndex: number) => void;
}

const Menu: React.FC<MenuProps> = ({ carts, plusItem, minusItem }) => {
  return (
    <div className="flex flex-col p-4">
      <section className="grid grid-cols-4 gap-4">
        {menus?.map((value, index) => {
          const cartItem = carts.find((cart) => cart.menu === index) || {
            menu: index,
            qty: 0,
          };
          return (
            <MenuCard
              menuIndex={index}
              menuImage={`/menu/${index + 1}.jpg`}
              menuName={value?.name}
              key={`menu-card-${index + 1}`}
              cartItem={cartItem}
              plusItem={plusItem}
              minusItem={minusItem}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Menu;
