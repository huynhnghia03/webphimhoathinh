"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { boolean } from "zod"


interface typeData {
    label: string,
    value: string
}

export function ComboboxForm({ datas, setSchedule, schedule }: { datas: typeData[], setSchedule: any, schedule?: any }) {
    const [open, setOpen] = React.useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {schedule
                        ? datas.find((data) => data.value === schedule)?.label
                        : "Select data..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>

                    <CommandList>

                        <CommandGroup>
                            {datas.map((data) => (
                                <CommandItem
                                    key={data.value}
                                    value={data.value}
                                    onSelect={(currentValue) => {
                                        setSchedule(currentValue === schedule ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            schedule === data.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {data.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
