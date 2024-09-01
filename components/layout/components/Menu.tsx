"use client"
import Link from "next/link"
import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
    const handleClose = () => {
        setIsOpen(!isOpen)
    }
    const isActive = (href: string) => pathname === href || pathname.startsWith(`/${href}`);

    return (
        <div className="lg:hidden" >
            <Sheet open={isOpen} onOpenChange={handleClose}>
                <SheetTrigger asChild>
                    <div className="flex flex-col items-center gap-[4.5px] cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                    background-animate p-3 rounded-md" onClick={handleClose}>
                        <div className={`w-6 h-1 bg-white rounded-sm ${isOpen && "-rotate-45 "} origin-right ease-in-out duration-500`}></div>
                        <div className={`w-6 h-1 bg-white rounded-sm ${isOpen && "opacity-0"}`}></div>
                        <div className={`w-6 h-1 bg-white rounded-sm ${isOpen && "rotate-45 "} origin-right ease-in-out duration-500`}></div>
                    </div>
                </SheetTrigger>
                <SheetContent side={'left'} className="bg-black text-white">
                    <div className="flex flex-col gap-6 mt-10 text-white text-md font-bold">
                        <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                    background-animate">DANG NHAP</Button>
                        <div className="flex flex-col gap-6">
                            <Link href={'/'} passHref className={isActive('/') ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-md' : 'hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-2 rounded-md'}>
                                Trang Chủ
                            </Link>
                            <Link href={'/doraemon'} passHref className={isActive('/doraemon') ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-md' : 'hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-2 rounded-md'}>
                                Doraemon
                            </Link>
                            <Link href={'/AllFilm/1'} passHref className={isActive('AllFilm') ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-md' : 'hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-2 rounded-md'}>
                                HH Trung Quốc
                            </Link>
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}