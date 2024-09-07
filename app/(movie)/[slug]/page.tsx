// import { Movie } from "@/common/dataTopicDto";
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getMovieById, getMovies } from "@/lib/moviesAPI";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from 'next/navigation';


// export async function generateStaticParams() {
//     const { datas } = await getMovies();
//     // console.log(datas)

//     return {
//         paths: datas.map((movie: Movie) => ({
//             params: { slug: movie.slug, detailTopic: movie }, // Assumes `slug` is a property of `Movie`
//         })),
//         fallback: 'blocking', // Sử dụng blocking để tạo trang cho các đường dẫn chưa được xây dựng
//     };
// }


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
    // console.log('params.slug,', params.slug)
    const detailEpisoden = await getMovieById(params.slug);
    if (!detailEpisoden) {
        return notFound();
    }


    return <ContentDetail detailMovie={detailEpisoden} />;
}

export default DetailFilm;
