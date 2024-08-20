"use client"
import { Movie } from "@/common/dataTopicDto"
import ImageUploader from "@/components/layout/components/ImageUploader"
import { ComboboxForm } from "@/components/ui/combox"
import { useToast } from "@/components/ui/use-toast"
import { createTopic, updateTopic } from "@/lib/moviesAPI"
import { useState } from "react"

interface typeData {
    label: string,
    value: string
}

export default function ContentAddTopic({ active = false, detailMovie }: { active?: boolean, detailMovie?: Movie }) {
    const { toast } = useToast()
    const [name, setName] = useState(detailMovie?.name || "")
    const [time, setTime] = useState(detailMovie?.time || "")
    const [image, setImage] = useState(detailMovie?.image || "")
    const [category, setCategory] = useState(detailMovie?.category || "")
    const [finish, setFinish] = useState(detailMovie?.finish?.toString() || "false")
    const [hot, setHot] = useState(detailMovie?.moreInteres?.toString() || "false")
    const [description, setDescription] = useState(detailMovie?.description || "")
    const [file, setFile] = useState<string>("")
    const [schedule, setSchedule] = useState(detailMovie?.schedule || "")

    const dateOfWeek: typeData[] = [
        { label: "Thứ 2", value: "M" },
        { label: "Thứ 3", value: "T" },
        { label: "Thứ 4", value: "W" },
        { label: "Thứ 5", value: "TH" },
        { label: "Thứ 6", value: "F" },
        { label: "Thứ 7", value: "S" },
        { label: "Chủ Nhật", value: "SU" }
    ]
    const booleanDates: typeData[] = [
        { label: "True", value: "true" },
        { label: "False", value: "false" },
    ]

    const handleCreateMovie = async () => {
        try {
            console.log(file)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('name', name)
            formData.append('description', description)
            formData.append('finish', finish)
            formData.append('moreInteres', hot)
            formData.append('category', category)
            formData.append('schedule', schedule)
            formData.append('time', time)

            const response = await createTopic(formData)
            if (response) {
                toast({
                    title: "Create successful",
                    description: "Movie topic created successfully",
                    variant: "default",
                })
            } else {
                toast({
                    title: "Create failed",
                    description: "Failed to create movie topic",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error('Create failed:', error)
            toast({
                title: "Create failed",
                description: "Failed to create movie topic",
                variant: "destructive",
            })
        }
    }

    const handleUpdateMovie = async (id: string) => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('name', name)
            formData.append('description', description)
            formData.append('finish', finish)
            formData.append('moreInteres', hot)
            formData.append('category', category)
            formData.append('schedule', schedule)
            formData.append('time', time)

            const response = await updateTopic(id, formData)
            if (response) {
                toast({
                    title: "Update successful",
                    description: "Movie topic updated successfully",
                    variant: "default",
                })
            } else {
                toast({
                    title: "Update failed",
                    description: "Failed to update movie topic",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error('Update failed:', error)
            toast({
                title: "Update failed",
                description: "Failed to update movie topic",
                variant: "destructive",
            })
        }
    }

    const handleRefresh = () => {
        setName('')
        setTime('')
        setFinish("false")
        setCategory('')
        setDescription('')
        setFile('')
        setSchedule('')
        setHot("false")
    }

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Movie Information</h3>
                </div>
                <div className="p-7">

                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="name">Name</label>
                            <div className="relative">

                                <input className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" />
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2"><label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="time">time</label>
                            <input className="p-2 w-full rounded border border-stroke bg-gray px-[4.5px] py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                id="time" type="text" name="time" value={time} onChange={(e) => setTime(e.target.value)} /></div>
                    </div>
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="Category">Category</label>
                            <div className="relative">

                                <input className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    id="Category" type="text" name="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2"><label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="finish">finish</label>
                            <ComboboxForm datas={booleanDates} schedule={finish} setSchedule={setFinish} />
                        </div>
                    </div>
                    <div className="mb-5.5">
                        <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="Hot">Hot</label>
                        <div className="relative">
                            <ComboboxForm datas={booleanDates} schedule={hot} setSchedule={setHot} />
                        </div>
                    </div>
                    <div className="mb-5.5">
                        <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="Schedule">Schedule</label>
                        <div className="relative">
                            <ComboboxForm datas={dateOfWeek} schedule={schedule} setSchedule={setSchedule} />
                        </div>
                    </div>
                    <div className="mb-5.5">
                        <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="image">image</label>
                        <div className="relative">

                            <input className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                id="image" value={image} type="text" name="image" onChange={(e) => setImage(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-5.5">
                        <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white" htmlFor="Description">Description</label>
                        <div className="relative">

                            <input className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                name="Description" id="Description" value={description} onChange={(e) => setDescription(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className="flex mt-3 justify-end gap-[4.5px]">
                        <button className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                            onClick={handleRefresh}>Cancel</button>
                        {active ? (
                            <button className="flex justify-center rounded bg-red-500 px-6 py-2 font-medium text-white hover:bg-opacity-90" onClick={handleCreateMovie}>Create Topic</button>
                        ) : (
                            <button className="flex justify-center rounded bg-green-500 px-6 py-2 font-medium text-white hover:bg-opacity-90" onClick={() => handleUpdateMovie(detailMovie?.id || '')}>Update Topic</button>
                        )}
                    </div>
                </div>
            </div>
            <ImageUploader setImage={setFile} />
        </>
    )
}
