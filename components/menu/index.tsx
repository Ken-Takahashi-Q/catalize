import { Card } from "antd";
import Image from "next/image";

interface MenuCardProps {
  menuImage: string;
  menuName?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ menuImage, menuName }) => {
  return (
    <div className="flex flex-col w-52 min-h-52 bg-gray-600 rounded overflow-hidden">
      <div className="relative w-full h-full">
        <Image alt="example" src={menuImage} layout="fill" objectFit="cover" />
      </div>
      <h1 className="p-2">{menuName}</h1>
    </div>
  );
};

export default MenuCard;
