import MenuCard from "@/components/menu";
import MenuSkeleton from "@/components/menu/menuSkeleton";
import { CartItem, MenuItem } from "@/interface";

interface MenuProps {
  menus: MenuItem[];
  cart: CartItem[];
  plusItem: (menuIndex: number) => void;
  minusItem: (menuIndex: number) => void;
}

const MenuSection: React.FC<MenuProps> = ({
  menus,
  cart,
  plusItem,
  minusItem,
}) => {
  return (
    <div className="flex flex-col p-4">
      <section className="grid grid-cols-4 gap-4">
        {menus.length > 0
          ? menus.map((menu, index) => {
              const qty =
                cart.find((item) => item.menu_id === index + 1)?.qty || 0;
              return (
                <MenuCard
                  key={`menu-card-${index + 1}`}
                  menu={{ ...menu, menu_id: index + 1 }}
                  qty={qty}
                  plusItem={plusItem}
                  minusItem={minusItem}
                />
              );
            })
          : Array.from({ length: 8 }).map((_, index) => (
              <MenuSkeleton key={`skeleton-card-${index}`} />
            ))}
      </section>
    </div>
  );
};

export default MenuSection;
