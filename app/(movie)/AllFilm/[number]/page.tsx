
import { Content } from "@/components/layout/components/content";
import SideBar from "@/components/layout/Sidebar";
import { getMovies } from "@/lib/moviesAPI";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//     const { totalPage } = await getMovies();

//     const params = [];

//     for (let i = 1; i <= totalPage; i++) {
//         params.push({ number: i.toString() }); // Here, you generate params with 1-indexed pages
//     }

//     return params;
// }
export const metadata: Metadata = {
    title: "Hoạt Hình Trung Quốc 3D",
    description: "Tổng hợp DORAEMON | HHTQ 3D | Hoạt Hình Trung Quốc 3D - Chinese Animation 3D - CN Animation 3D HD Vietsub, mới nhất 2024 cập nhật hàng ngày...",

};

export default async function AllFilm({ params }: { params: { number: number } }) {
    const page = params.number; // Convert 1-indexed to 0-indexed
    if (page < 0) {
        return notFound();
    }

    const { datas, totalPage } = await getMovies(page);

    if (!datas || datas.length <= 0) {
        return notFound();
    }

    return (
        <>
            <div className="flex-row p-4 gap-6 items-center bg-[#2c2c33]">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                    <div className="w-full lg:w-[70%] xl:w-[100%]">
                        <Content movies={datas} activeALl={false} activeSchedule={false} activePagination={true} totalPage={totalPage} currentpage={page} />
                    </div>
                    <div className="lg:w-[30%]"><SideBar /></div>
                </div>
            </div>
        </>
    );
}
