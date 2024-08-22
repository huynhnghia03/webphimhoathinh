import { cn } from "@/lib/utils";
import style from './ConfigUI.module.css'
import Link from "next/link";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid  grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto cursor-pointer  ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    image,
    episoden,
    slug,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    image?: string;
    slug?: string;
    episoden?: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <Link href={`/${slug}`}>
            <div
                className={cn(
                    "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-[rgb(75 75 75 / var(--tw-bg-opacity))] border border-transparent justify-between flex flex-col space-y-4 relative  overflow-hidden ",
                    className
                )}
            >

                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  overflow-hidden relative">

                    <Image src={`${image}`} alt="anh" width="170" height="280" className="w-[100%] h-[100%] object-cover transform transition-transform duration-300 hover:scale-105 hover:opacity-[0.8]" style={{ borderRadius: "inherit" }} />

                    {/* <AnimateImage /> */}
                </div>
                <div className=" text-sm p-1 rounded-lg font-bold absolute -top-3 left-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                    background-animate">
                    Tập {episoden}
                </div>
                <div className={`font-sans font-bold text-white w-[100%] mb-2 absolute bottom-0 pt-[80px] truncate whitespace-nowrap ${style.backgroun_gradient} `} >
                    <div className="mb-3 ml-2 text-sm">
                        {title}
                    </div>
                </div>

                {/* <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div> */}

            </div>
        </Link>
    );
};
