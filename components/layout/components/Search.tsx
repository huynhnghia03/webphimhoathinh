'use client'
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search() {
    const [focus, setFocus] = useState(false)
    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        setFocus(false)
    }
    return (
        <div className="hidden md:flex items-center bg-black p-1 rounded-md search-bar">
            <SearchIcon width={20} height={20} className=" w-5 h-5 text-gray-400 cursor-pointer" />

            <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Search..." className={`p-2 bg-black flex-1 outline-none placeholder-hover ${focus && "text-white placeholder:text-white"}`} />
        </div>
    )
}