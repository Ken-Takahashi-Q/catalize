import { Flex, Skeleton } from "antd";

const MenuSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-60 min-h-48 bg-gray-200 rounded-lg animate-pulse">
      {/* Image Placeholder */}
      <div className="relative w-full h-36 bg-gray-300 rounded-t-lg"></div>

      {/* Text Placeholder */}
      <div className="flex justify-between items-center p-2 gap-2 h-12">
        <div className="flex-1 h-full bg-gray-300 rounded-md"></div>
        <div className="w-1/4 h-full bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default MenuSkeleton;
