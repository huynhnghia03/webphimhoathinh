import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HH3DTH",
  description: "Phim Hoạt Hình 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-[#4b4b4b]`}>
        <div className="w-full bg-[#232329] md:px-8 lg:px-16 xl:px-32">
          <Navbar />
        </div>
        <div className=" px-4 mb-4 md:px-8 lg:px-16 xl:px-32"> {children}</div>
        <div className=" m-auto bg-[#232329] md:px-8 lg:px-16 xl:px-32">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
