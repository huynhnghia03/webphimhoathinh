
import Link from "next/link";
import ContentCreateVideo from "../../_components/contentCreateVideo";
import { getDetailVideo } from "@/lib/moviesAPI";
import { Movie } from "@/common/dataTopicDto";

// export async function generateStaticParams() {
//     // Fetch the total number of pages from your API or database

//     return
// }
export default async function VideoPage({ params }: { params: { slug: string, episoden: string } }) {

    const getDetailTopic: Movie = await getDetailVideo(params.slug, params.episoden)

    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white">
            <div className="mx-auto  max-w-270">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-md2 font-semibold text-black dark:text-white">Update Video</h2>
                    <nav>
                        <ol className="flex items-center gap-2">
                            <li><Link className="font-medium" href="/admin/manage-kkhstyw56">mangeTopic /</Link></li>
                            <li><Link className="font-medium" href={`/admin/manage-kkhstyw56/${params.slug}`}>updatetopic /</Link></li>
                            <li className="font-medium text-primary">updateVideo</li>
                        </ol>
                    </nav>
                </div>
                <div className="grid gap-8">
                    <ContentCreateVideo getDetailTopic={getDetailTopic.episodens[0]} slug={params.slug} activeUpdate={true} />
                </div>
            </div>
        </div>
    )
}