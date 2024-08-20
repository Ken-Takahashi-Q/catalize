import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center px-4 md:px-8 py-2 gap-4 w-full bg-green-600">
      <Link href="/" className="font-bold text-2xl">
        Catalize
      </Link>
      {/* <SearchBox /> */}
    </nav>
  );
};

export default Navbar;
