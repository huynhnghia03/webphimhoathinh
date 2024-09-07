import { Movie } from "@/common/dataTopicDto";
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getEpisoden } from "@/lib/moviesAPI";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(
    { params }: { params: { slug: string, episoden: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const detailEpisoden: Movie = await getEpisoden(params.slug, params.episoden);

    if (!detailEpisoden) {
        return {
            title: "Not Found",
            description: "Episode not found",
        };
    }

    return {
        title: `${detailEpisoden.name} | Tập ${params.episoden} | ${detailEpisoden.category}`,
        description: detailEpisoden.description,
        openGraph: {
            title: `${detailEpisoden.name} | Tập ${params.episoden} | ${detailEpisoden.category}`,
            description: detailEpisoden.description,
            url: `/${params.slug}/${params.episoden}`,
            images: [
                {
                    url: detailEpisoden.image || "/logo.png",
                    width: 800,
                    height: 600,
                    alt: detailEpisoden.name,
                },
            ],
        },
    };
}

async function Episoden({ params }: { params: { slug: string, episoden: string } }) {
    const detailEpisoden: Movie = await getEpisoden(params.slug, params.episoden);

    if (!detailEpisoden || detailEpisoden.episodens.length < 1) {
        return notFound();
    }

    return <ContentDetail detailMovie={detailEpisoden} episoden={true} />;
}

export default Episoden;
