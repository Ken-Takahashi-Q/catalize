import { MenuCategory } from "@/interface";

interface MenuFilterProps {
  menuCat: MenuCategory[];
  handleFilterMenu: (menuCat: number) => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({
  menuCat,
  handleFilterMenu,
}) => {
  const renderFilterSkeleton = () => (
    <div className="flex flex-col w-36 bg-red-700 border rounded-lg animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`skeleton-category-${index}`}
          className={`px-4 py-2 ${index > 0 ? "border-t" : ""}`}
        >
          <div className="h-6 rounded"></div>
        </div>
      ))}
    </div>
  );

  const renderFilters = () => (
    <div className="flex flex-col border rounded-lg">
      {menuCat.slice(1).map((category, index) => (
        <button
          key={`category-${category.category}`}
          className={`px-4 py-2 text-xl bg-red-700 hover:bg-red-800 duration-300 
          ${index === 0 ? "rounded-t-lg" : ""} 
          ${index === menuCat.slice(1).length - 1 ? "rounded-b-lg" : ""}
          ${index > 0 ? "border-t" : ""}`}
          onClick={() => handleFilterMenu(category.category)}
        >
          {category.category_th}
        </button>
      ))}
    </div>
  );

  return (
    <div className="absolute left-4 flex flex-col">
      {menuCat.length > 0 && (
        <button
          key="category-0"
          className="mb-2 px-4 py-2 text-xl border rounded-lg bg-red-700 hover:bg-red-800 duration-300"
          onClick={() => handleFilterMenu(0)}
        >
          {menuCat[0]?.category_th}
        </button>
      )}
      {menuCat.length > 0 ? renderFilters() : renderFilterSkeleton()}
    </div>
  );
};

export default MenuFilter;
