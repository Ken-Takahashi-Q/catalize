import MenuCard from "@/components/menu";
import { menus } from "../utils/menuName";

const Menu = () => {
  return (
    <div className="flex flex-col p-4">
      <section className="grid grid-cols-4 gap-4">
        {menus?.map((value, index) => {
          return (
            <MenuCard
              menuImage={`/menu/${index + 1}.jpg`}
              menuName={value?.name}
              key={`menu-card-${index + 1}`}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Menu;
