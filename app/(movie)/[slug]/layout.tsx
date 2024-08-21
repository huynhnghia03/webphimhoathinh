import SideBar from "@/components/layout/Sidebar";
import React from "react";
export default function MovieLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#2c2c33] rounded-b-md p-3 flex-col lg:flex-row gap-6 justify-between">
      <div className="w-full lg:w-[70%] xl:w-[100%]">
        {children}
      </div>
      <div className="lg:w-[30%]"><SideBar /></div>
    </div>
  );
}
