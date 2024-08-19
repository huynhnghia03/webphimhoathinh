import { getHotMovie } from "@/lib/moviesAPI";
import { Movie } from "@/common/dataTopicDto";
import SimpleSlider from "./SimpleSlider";

// Ensure that the `getHotMovie` function is accessible
export default async function ContentSlider() {
    const datas: Movie[] = await getHotMovie();
    return (
        <div>
            <SimpleSlider datas={datas} />
        </div>
    );
}
