import { Button, Flex } from "antd";

const NavbarPages = () => {
  return (
    <Flex gap={8} className="flex items-center">
      <span className="px-2 py-1 rounded-lg">Table: 1</span>
      <Button className="text-black" href="/history">
        ประวัติการสั่ง
      </Button>
    </Flex>
  );
};

export default NavbarPages;
