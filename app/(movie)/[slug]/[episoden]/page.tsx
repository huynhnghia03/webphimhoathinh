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

    // Safely access the title and description, and provide fallbacks
    const episodeTitle = detailEpisoden?.episodens[0]?.tiltle ?? params.episoden;
    const episodeDescription = detailEpisoden?.episodens[0]?.description ?? "Xem tập mới nhất";
    const imageUrl = detailEpisoden?.image ? `/${detailEpisoden.image}` : "/logo.png"; // Ensure image URL is properly formatted

    return {
        title: `${detailEpisoden.name} | ${episodeTitle} | ${detailEpisoden.category}`,
        description: `Xem phim ${detailEpisoden.name} ${episodeTitle} vietsub ${episodeDescription}`,
        openGraph: {
            title: `${detailEpisoden.name} | ${episodeTitle} | ${detailEpisoden.category}`,
            description: `Xem phim ${detailEpisoden.name} ${episodeTitle} vietsub ${episodeDescription}`,
            url: `/${params.slug}/${params.episoden}`,
            images: [
                {
                    url: imageUrl,
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
