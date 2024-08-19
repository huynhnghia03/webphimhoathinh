import Link from "next/link";
import ContentAddTopic from "../_components/contentAddTopic";


export default async function AddTopic() {
    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white">
            <div className="mx-auto  max-w-270">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-md2 font-semibold text-black dark:text-white">Add Topic</h2>
                    <nav>
                        <ol className="flex items-center gap-2">
                            <li><Link className="font-medium" href="/admin/manage-kkhstyw56">mangeTopic /</Link></li>

                            <li className="font-medium text-primary">addTopic</li>
                        </ol>
                    </nav>
                </div>
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-5">
                        <ContentAddTopic active={true} />
                    </div>
                </div>
            </div>
        </div >
    )
}