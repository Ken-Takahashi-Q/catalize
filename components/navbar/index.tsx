import Link from "next/link";
import NavbarPages from "../menuPages";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-2 gap-4 w-full bg-red-800">
      <Link href="/" className="font-bold text-2xl">
        Catalize
      </Link>
      <NavbarPages />
    </nav>
  );
};

export default Navbar;
