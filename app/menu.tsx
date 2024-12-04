import MenuCard from "@/components/menu";
import MenuFilter from "@/components/menu/menuFilter";
import MenuSkeleton from "@/components/menu/menuSkeleton";
import { OrderItem, MenuCategory, MenuItem } from "@/interface";
import { useMemo, useState } from "react";

interface MenuProps {
  menus: MenuItem[];
  menuCat: MenuCategory[];
  cart: OrderItem[];
  plusItem: (menuIndex: number) => void;
  minusItem: (menuIndex: number) => void;
}

const MenuSection: React.FC<MenuProps> = ({
  menus,
  menuCat,
  cart,
  plusItem,
  minusItem,
}) => {
  const [filterMenuCat, setFilterMenuCat] = useState(0);
  const filteredMenu = useMemo(
    () =>
      filterMenuCat === 0
        ? menus
        : menus.filter((menu) => menu.category === filterMenuCat),
    [menus, filterMenuCat]
  );

  const handleFilterMenu = (filterMenuCat: number) => {
    setFilterMenuCat(filterMenuCat);
  };

  return (
    <div className="flex flex-col p-4">
      <MenuFilter menuCat={menuCat} handleFilterMenu={handleFilterMenu} />

      {filterMenuCat > 0 && (
        <h2 className="mb-4 px-4 py-2 rounded-lg bg-red-700 text-xl font-bold">
          {menuCat.find((cat) => cat.category === filterMenuCat)?.category_th}
        </h2>
      )}
      {menuCat.length > 0 ? (
        menuCat.map((category, index) => (
          <div key={`category-${category.category}`} className="">
            {filterMenuCat === 0 && index > 0 && (
              <h2 className="mb-4 px-4 py-2 rounded-lg bg-red-700 text-xl font-bold">
                {category.category_th}
              </h2>
            )}
            <section
              className={`grid grid-cols-4 gap-4 ${
                index > 0 && filterMenuCat === 0 ? "mb-4" : ""
              }`}
            >
              {filteredMenu
                .filter((menu) => menu.category === category.category)
                .map((menu) => {
                  const qty =
                    cart.find((item) => item.menu_id === menu.menu_id)
                      ?.quantity || 0;
                  return (
                    <MenuCard
                      key={`menu-card-${menu.menu_id}`}
                      menu={menu}
                      qty={qty}
                      plusItem={plusItem}
                      minusItem={minusItem}
                    />
                  );
                })}
            </section>
          </div>
        ))
      ) : (
        <section className="grid grid-cols-4 gap-4 mb-4">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <MenuSkeleton key={`menu-skeleton-${index}`} />
            ))}
        </section>
      )}
    </div>
  );
};

export default MenuSection;
