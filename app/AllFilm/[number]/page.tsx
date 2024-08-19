import NotFound from "@/app/not-found";
import { Content } from "@/components/layout/components/content";
import SideBar from "@/components/layout/Sidebar";
import { getMovies } from "@/lib/moviesAPI";

export default async function AllFilm({ params }: { params: { number: number } }) {
    const { datas, totalPage } = await getMovies(params.number);
    if (!datas) {
        return NotFound
    }
    return (
        <div className="flex-row p-4 gap-6 items-center bg-[#2c2c33]">
            <div className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="w-full lg:w-[70%] xl:w-[100%]">
                    <Content movies={datas} activeALl={false} activeSchedule={false} activePagination={true} totalPage={totalPage} currentpage={params.number} />
                </div>
                <div className="lg:w-[30%]"><SideBar /></div>
            </div>
        </div>
    );
}
