import { Content } from "@/components/layout/components/content";
import SideBar from "@/components/layout/Sidebar";
import { getMovies } from "@/lib/moviesAPI";
import NotFound from "./not-found";
import ContentSlider from "@/components/layout/components/slider/contentSlider";
import { Metadata } from "next";


async function Home() {
  // Fetch data here
  const { datas } = await getMovies();

  if (!datas) {
    return NotFound
  }
  return (
    <>
      <div className="flex-row gap-6 items-center bg-[#4b4b4b]">
        <div>
          <ContentSlider />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="w-full lg:w-[70%] xl:w-[100%]">
            <Content movies={datas} />
          </div>
          <div className="lg:w-[30%]"><SideBar /></div>
        </div>
      </div>
    </>
  );
}

export default Home
