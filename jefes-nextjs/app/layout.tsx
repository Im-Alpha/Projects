import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
import localFont from 'next/font/local';
import './layout.css'

// const inter = Inter({ subsets: ["latin"] });
const robleAlt = localFont({
  src: './RobleAlt.woff',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jefe's Mexican Cocina & Cantina",
  description: "Located in Broken Arrow, Oklahoma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robleAlt.className} par`}>
        <NavBar />
        {/* <Image
            src="/PaintBackground1.webp"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt="Logo"
            className="hidden md:block absolute -z-10"
          /> */}
        <main className="bg-[#fffafa] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
