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
            <Script
              id="your-script-id"
              type="text/javascript"
              data-cfasync="false"
              strategy="lazyOnload"
            >
              {`
          (function(){
            var g=window,
                i="a095ea610e2a809790871ecc4e64f1a2",
                v=[["siteId",230*794-368+228+976+4949987],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],
                e=["d3d3LmludGVsbGlwb3B1cC5jb20vY0hDTy9KTmNpei9zanF1ZXJ5LnNvY2lhbGZlZWQubWluLmpz","ZDNtcjd5MTU0ZDJxZzUuY2xvdWRmcm9udC5uZXQvaWpxdWVyeS56dHJlZS5hbGwubWluLmpz"],
                j=-1, c, t, h=function(){
                  clearTimeout(t); j++;
                  if(e[j]&&!(1751889331000<(new Date).getTime()&&1<j)){
                    c=g.document.createElement("script");
                    c.type="text/javascript";
                    c.async=!0;
                    var d=g.document.getElementsByTagName("script")[0];
                    c.src="https://"+atob(e[j]);
                    c.crossOrigin="anonymous";
                    c.onerror=h;
                    c.onload=function(){ clearTimeout(t); g[i.slice(0,16)+i.slice(0,16)]||h() };
                    t=setTimeout(h,5E3);
                    d.parentNode.insertBefore(c,d)
                  }
                };
              if(!g[i]){
                try{ Object.freeze(g[i]=v) }catch(e){}
                h()
              }
          })();
        `}
            </Script>
            <Script
              src="https://dibsemey.com/act/files/tag.min.js?z=8071962"
              data-cfasync="false"
              async
            />

            <Script
              id="custom-script"
              strategy="afterInteractive"
            >
              {`
          (function(d,z,s){
            s.src='https://'+d+'/400/'+z;
            try{
              (document.body||document.documentElement).appendChild(s);
            } catch(e){}
          })('aupoafto.com',8071969,document.createElement('script'));
        `}
            </Script>
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
