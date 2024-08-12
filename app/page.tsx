import Navbar from "@/components/navbar";
import Menu from "@/app/menu";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Menu />
    </main>
  );
}
