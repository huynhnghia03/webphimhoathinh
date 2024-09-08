import { Movie } from "@/common/dataTopicDto";
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getMovieById, getMovies } from "@/lib/moviesAPI";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from 'next/navigation';

// This function is used to generate static paths
// export async function generateStaticParams() {
//     const { datas } = await getMovies()

//     return datas.map((post: Movie) => {
//         return {
//             slug: post.slug.toString(),
//         };
//     });
// }

// This function generates metadata for each page
export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { datas } = await getMovies()
    // const detailMovie = await getMovieById(params.slug);
    const detail = datas.find((val: Movie) => val.slug == params.slug)

    if (!detail) {
        return {
            title: "Not Found",
            description: "Movie not found",
        };
    }

    return {
        title: `${detail.name} | Tập ${detail.newEpiso} | ${detail.category}`,
        description: `Xem phim ${detail.name} Tập mói nhất ${detail.newEpiso} vietsub ${detail.description}`,
        openGraph: {
            title: `${detail.name} | Tập ${detail.newEpiso} | ${detail.category}`,
            description: `Xem phim ${detail.name} Tập mới nhất ${detail.newEpiso} vietsub ${detail.description}`,
            url: `/${params.slug}`,
            images: [
                {
                    url: "/" + detail.imageUrl || "/logo.png",
                    width: 800,
                    height: 600,
                    alt: detail.name,
                },
            ],
        },
    };
}

// This is your page component
export default async function DetailFilm({ params }: { params: { slug: string } }) {
    console.log('Received params in Page:', params);
    const { datas } = await getMovies()
    // const detailMovie = await getMovieById(params.slug);
    const detail = datas.find((val: Movie) => val.slug == params.slug)
    console.log('Fetched movie details:', detail);
    if (!detail) {
        return notFound();
    }
    return <ContentDetail detailMovie={detail} />;
}
