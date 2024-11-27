import { Button, Flex } from "antd";

const MenuPages = () => {
  return (
    <Flex gap={8}>
      {/* <Button className="text-black" href="/">
        สั่งอาหาร
      </Button> */}
      <Button className="text-black" href="/history">
        ประวัติการสั่ง
      </Button>
    </Flex>
  );
};

export default MenuPages;
