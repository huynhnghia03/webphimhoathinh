import { Movie } from "@/common/dataTopicDto";
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getEpisoden } from "@/lib/moviesAPI";
import { notFound } from "next/navigation";

async function Episoden({ params }: { params: { slug: string, episoden: string } }) {
    console.log(params)
    const detailEpisoden: Movie = await getEpisoden(params.slug, params.episoden)
    console.log(detailEpisoden.episodens)
    if (!detailEpisoden.episodens || detailEpisoden.episodens.length < 1) {
        return notFound()
    }
    return (
        <ContentDetail detailMovie={detailEpisoden} episoden={true} />


    );
}
export default Episoden