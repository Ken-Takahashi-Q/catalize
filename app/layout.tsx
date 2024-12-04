import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import AppWrapper from "./appWrapper";

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
        <AppWrapper>
          <main className="flex flex-col items-center text-white min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </main>
        </AppWrapper>
      </body>
    </html>
  );
}
