import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster"
import GlobalEffects from "./GlobalEffects";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Hoạt Hình Trung Quốc 3D",
//   description: "Tổng hợp DORAEMON | HHTQ 3D | Hoạt Hình Trung Quốc 3D - Chinese Animation 3D - CN Animation 3D HD Vietsub, mới nhất 2024 cập nhật hàng ngày...",

// };
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
          </Script>
          {/* Mã quảng cáo PopAds */}
          <Script
            id="popads-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  (function(){
                    var c=window,
                        t="a095ea610e2a809790871ecc4e64f1a2",
                        r=[["siteId", 576228421+659+5132857],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],
                        f=["d3d3LmludGVsbGlwb3B1cC5jb20vby9WdWZJRkovcGpxdWVyeS5zb2NpYWxmZWVkLm1pbi5qcw==","ZDNtcjd5MTU0ZDJxZzUuY2xvdWRmcm9udC5uZXQvbWpxdWVyeS56dHJlZS5hbGwubWluLmpz"],
                        z=-1,k,o,h=function(){
                          clearTimeout(o);z++;if(f[z]&&!(1751867478000<(new Date).getTime()&&1<z)){
                            k=c.document.createElement("script");
                            k.type="text/javascript";
                            k.async=!0;
                            var p=c.document.getElementsByTagName("script")[0];
                            k.src="https://"+atob(f[z]);
                            k.crossOrigin="anonymous";
                            k.onerror=h;
                            k.onload=function(){clearTimeout(o);c[t.slice(0,16)+t.slice(0,16)]||h()};
                            o=setTimeout(h,5E3);p.parentNode.insertBefore(k,p);
                          }
                        };
                    if(!c[t]){
                      try{Object.freeze(c[t]=r)}catch(e){}
                      h();
                    }
                  })();
                `,
            }}
          />
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
  );
}
