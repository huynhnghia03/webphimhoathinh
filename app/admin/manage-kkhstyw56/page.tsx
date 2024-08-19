import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import LogOut from "./logout";
import ContentDeleteTopic from "./_components/contentDeleteMovie";

export default function MangeAllMovie() {

  return (
    <div className="bg-white shadow-sm rounded-b-lg overflow-hidden">
      <LogOut />
      <div className="mb-6 p-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-black dark:text-white">All Topics</h2>
        <Link href={"/admin/manage-kkhstyw56/addTopic"} className="text-gray-200 py-2 px-3 rounded-md bg-red-600 hover:text-white hover:font-bold">
          <PlusCircleIcon width={24} height={24} />
        </Link>
      </div>
      <ContentDeleteTopic />
    </div>
  );
}
