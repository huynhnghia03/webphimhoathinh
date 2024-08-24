'use client'; // Add this line to ensure this component is client-side
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../buttonSlider/configButton";
import Link from "next/link";
import { Movie } from "@/common/dataTopicDto";

// Ensure that the `getHotMovie` function is accessible
export default function SimpleSlider({ datas }: { datas: Movie[] }) {
  const settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {datas.map((val, ind) => (
          <div
            key={`slider-item-${ind}`}
            className="p-1 md:pt-3 rounded-3xl mb-4"
          >
            <Link href={`${val.slug}`}>
              <Image
                src={`/${val.image}`}
                alt={val.name || "Movie Image"}
                height={300}
                width={300}
                className="h-full w-full mx-auto object-contain rounded-lg"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
