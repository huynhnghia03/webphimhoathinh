// import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
// import { SeoPage } from "@/components/layout/components/seo";
// import { getMovieById } from "@/lib/moviesAPI";
// import { Metadata, ResolvingMetadata } from "next";
// import { notFound } from 'next/navigation';
// export async function generateMetadata({ params }: { params: { slug: string } },
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     const detailEpisoden = await getMovieById(params.slug)

//     return {
//         title: detailEpisoden.name + " | " + detailEpisoden.category,
//     }
// }
// async function DetailFilm({ params }: { params: { slug: string } }) {
//     const detailMovie = await getMovieById(params.slug)
//     if (!detailMovie) {
//         return notFound()
//     }
//     return (
//         <>
//             <SeoPage title={detailMovie.name}
//                 description={detailMovie.description}
//                 ogTitle={detailMovie.name + detailMovie.description + detailMovie.category} />
//             <ContentDetail detailMovie={detailMovie} />
//         </>
//     );
// }
// export default DetailFilm
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getMovieById } from "@/lib/moviesAPI";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from 'next/navigation';

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const detailEpisoden = await getMovieById(params.slug);

    if (!detailEpisoden) {
        return {
            title: "Not Found",
            description: "Movie not found",
        };
    }

    return {
        title: `${detailEpisoden.name} | ${detailEpisoden.category}`,
        description: detailEpisoden.description,
        openGraph: {
            title: detailEpisoden.name,
            description: detailEpisoden.description,
            url: `/${params.slug}`,
            images: [
                {
                    url: detailEpisoden.imageUrl || "/logo",
                    width: 800,
                    height: 600,
                    alt: detailEpisoden.name,
                },
            ],
        },
    };
}

async function DetailFilm({ params }: { params: { slug: string } }) {
    const detailMovie = await getMovieById(params.slug);

    if (!detailMovie) {
        return notFound();
    }

    return <ContentDetail detailMovie={detailMovie} />;
}

export default DetailFilm;
