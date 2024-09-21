import { Movie } from "@/common/dataTopicDto";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { getSchedules } from "@/lib/moviesAPI";
import GridContent from "./GridContent";

export default async function Schedule() {
    const schedules: Movie[] = await getSchedules();
    const dateOfWeek = [
        { name: "Thứ 2", value: "M" },
        { name: "Thứ 3", value: "T" },
        { name: "Thứ 4", value: "W" },
        { name: "Thứ 5", value: "TH" },
        { name: "Thứ 6", value: "F" },
        { name: "Thứ 7", value: "S" },
        { name: "Chủ Nhật", value: "SU" }
    ];

    // Pre-filter schedules for SP once
    const specialSchedules = schedules.filter(movie => movie.schedule === "SP");

    return (
        <Tabs defaultValue="M" className="w-full">
            <TabsList className="flex w-full flex-wrap bg-black">
                {dateOfWeek.map(({ name, value }) => (
                    <TabsTrigger key={value} value={value} className="flex-grow text-center p-2">
                        {name}
                    </TabsTrigger>
                ))}
            </TabsList>
            {dateOfWeek.map(({ value }) => (
                <TabsContent key={value} value={value}>
                    <GridContent
                        movies={[...schedules.filter(movie => movie.schedule === value), ...specialSchedules]}
                    />
                </TabsContent>
            ))}
        </Tabs>
    );
}
