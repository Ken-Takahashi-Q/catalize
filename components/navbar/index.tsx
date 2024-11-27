import Link from "next/link";
import MenuPages from "../menuPages";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-2 gap-4 w-full bg-green-100">
      <Link href="/" className="font-bold text-2xl">
        Catalize
      </Link>
      <MenuPages />
      {/* <SearchBox /> */}
    </nav>
  );
};

export default Navbar;
