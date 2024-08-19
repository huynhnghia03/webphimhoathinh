import Link from "next/link";
import GridContent from "./GridContent";
import Schedule from "./Schedule";
import { Button } from "@/components/ui/button";
import { PaginationDemo } from "@/components/layout/components/buttonSlider/pagination/Pagination";

import { Movie } from "@/common/dataTopicDto";
async function Content({ movies, activeALl = true, activeSchedule = true, activePagination = false, totalPage, currentpage }: { movies: Movie[], activeALl?: boolean; activeSchedule?: boolean; activePagination?: boolean, totalPage?: number, currentpage?: number }) {

    return (
        <section className="text-white flex flex-col gap-4 ">
            <h4 className="font-bold text-xl bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate w-[110px] rounded-lg p-2">Mới Nhất</h4>
            <div>
                {/* Render movies using the `GridContent` component */}
                <GridContent movies={movies} />
            </div>
            {activeALl && (
                <div className="self-end">
                    <Link href={'/AllFilm/2'}>
                        <Button className="hover:bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600">Xem tất cả</Button>
                    </Link>
                </div>
            )}

            {activeSchedule && (
                <>
                    <h4 className="mt-2 font-bold text-xl bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate w-[125px] rounded-lg p-2">Lịch Chiếu</h4>
                    <Schedule />
                </>
            )}

            {activePagination && (
                <div>
                    <PaginationDemo totalPage={totalPage} currentPage={currentpage} />
                </div>
            )}
        </section>
    );
}


export default Content;