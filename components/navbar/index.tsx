import SearchBox from "./searchbox";

const Navbar = () => {
  return (
    <nav className="flex items-center px-4 py-2 gap-4 w-full bg-green-600">
      Catalize
      <SearchBox />
    </nav>
  );
};

export default Navbar;
