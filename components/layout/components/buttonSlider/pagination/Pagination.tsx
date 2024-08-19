'use client'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
    totalPage?: number;
    currentPage?: number;
}

export function PaginationDemo({ totalPage = 1, currentPage = 1 }: PaginationProps) {
    return (
        <Pagination>
            <PaginationContent className="flex flex-wrap justify-center">
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            className="bg-[#595959] text-gray-200 font-bold hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                            href={`${currentPage - 1}`}
                        />
                    </PaginationItem>
                )}
                {
                    Array(totalPage).fill(0).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href={`${index + 1}`}
                                className={`bg-[#595959] text-gray-200 font-bold p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ${currentPage == index + 1 ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white' : ''}`}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
                {totalPage > 5 && <PaginationEllipsis />}
                {currentPage < totalPage && (
                    <PaginationItem>
                        <PaginationNext
                            className="bg-[#595959] text-gray-200 font-bold hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                            href={`${Number(currentPage) + 1}`}
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )
}
