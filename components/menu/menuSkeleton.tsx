import { Flex, Skeleton } from "antd";

const MenuSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-60 min-h-48 bg-gray-200 rounded-lg animate-pulse">
      <Skeleton.Image style={{ width: "100%", height: 140 }} />
      <Flex className="items-center p-2 h-fit">
        <Skeleton.Input active />
      </Flex>
    </div>
  );
};

export default MenuSkeleton;
