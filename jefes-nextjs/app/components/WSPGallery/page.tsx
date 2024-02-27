"use client";
import React, { useState } from "react";
import "./wspgallery.css";
import Image from "next/image";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const WSPGallery = ({ galleryImages }: any) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: any) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <AiOutlineClose className="btnClose text-2xl" onClick={handleCloseModal} />
          <FaCircleChevronLeft className="btnPrev text-2xl" onClick={prevSlide} />
          <FaCircleChevronRight className="btnNext text-2xl" onClick={nextSlide} />
          <div className="fullScreenImage">
            <Image
              src={galleryImages[slideNumber].img}
              alt="/"
              fill
              style={{ objectFit: "contain" }}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide: { img: string | StaticImport; }, index: React.Key | null | undefined) => {
            return (
              <div className="single w-[200px] " key={index}>
                <Image
                  src={slide.img}
                  alt="/"
                  width={180}
                  height={180}
                  quality={100}
                  className="cursor-pointer"
                  onClick={() => handleOpenModal(index)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WSPGallery;
