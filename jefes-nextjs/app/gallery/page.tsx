import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import WSPGallery from "../components/WSPGallery/page";

const Gallery = () => {
  const galleryImages = [
    {
      img: "/img01.webp",
    },
    {
      img: "/fbimg02.webp",
    },
    {
      img: "/food01.jpg",
    },
    {
      img: "/food02.webp",
    },
    {
      img: "/IMG_1114.webp",
    },
    {
      img: "/IMG_2737.webp",
    },
    {
      img: "/IMG_2749.webp",
    },
    {
      img: "/IMG_2766.webp",
    },
    {
      img: "/img05.webp",
    },
    {
      img: "/img112.webp",
    },
    {
      img: "/navheader.png",
    },
  ];

  return (
    <div className="flex flex-col relative">
      <div className="flex relative pt-40 w-full h-[400px] overflow-hidden">
        <Image
          src="/IMG_2431.jpg"
          alt="nav image"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          className="brightness-[20%] "
        />
        <div className="flex flex-col w-full text-center xl:text-5xl xl:block text-white lg:text-2xl absolute">
          <div className="p-6 ">
            <p className="py-4">
              <span className="">GALLERY</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="">
        <EmblaCarousel />
      </div> */}
      <div className="flex justify-center py-8 bg-paintbg">
        <WSPGallery galleryImages={galleryImages} />
      </div>
    </div>
  );
};

export default Gallery;
