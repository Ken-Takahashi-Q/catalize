import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const noto_sans_thai = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalize - Online restaurant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={noto_sans_thai.className}>
        <main className="flex flex-col items-center min-h-screen text-white">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
