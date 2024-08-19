"use client"
import Link from "next/link"
import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => {
        setIsOpen(!isOpen)
    }
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
                            <Link href={'/'}>Trang Chu</Link>
                            <Link href={'/'}>Doraemon</Link>
                            <Link href={'/'}>HH Trung Quoc</Link>
                            <Link href={'/'}>Lich Chieu</Link>
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}