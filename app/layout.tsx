import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster"
import GlobalEffects from "./GlobalEffects";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXT_PUBLIC_API_FRONTEND || "/"),
  title: 'Hoạt Hình Trung Quốc 3D',
  description: 'Tổng hợp DORAEMON | HHTQ 3D | Hoạt Hình Trung Quốc 3D - Chinese Animation 3D - CN Animation 3D HD Vietsub, mới nhất 2024 cập nhật hàng ngày...',
  openGraph: {
    type: 'website',
    locale: 'vi',
    url: process.env.NEXT_PUBLIC_API_FRONTEND,
    siteName: 'Hoạt Hình Trung Quốc 3D',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="vi">
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');

              `}
 </Script>

          {/* Mã quảng cáo PopAds */}

        </>
      )}
     <body className={`${inter.className} bg-[#4b4b4b]`}>
        <div className="w-full bg-[#232329] md:px-8 lg:px-16 xl:px-32">
          <Navbar />
        </div>

        <div className=" px-4 mb-4 md:px-8 lg:px-16 xl:px-32">
          <GlobalEffects />
          {children}
        </div>
        <div className=" m-auto bg-[#232329] md:px-8 lg:px-16 xl:px-32">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
</>
  );
}
