"use client";
import React from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import Image from "next/image";
import "./carousel.css";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import { PrevButton, NextButton } from "./EmblaCarouselArrowsDotsButtons";
import { useState, useCallback, useEffect } from "react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    // setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="embla w-full" ref={emblaRef}>
      <div className="embla__container w-full">
        <div className="embla__slide relative w-full">
          <Image
            src="/img01.webp"
            alt="/"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }} // optional
            quality={100}
          />
        </div>
        <div className="embla__slide relative w-full overflow-hidden">
          <Image
            src="/IMG_2431.jpg"
            alt="/"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }} // optional
            quality={100}
          />
        </div>
        <div className="embla__slide relative w-full">
          <Image
            src="/images/bar01.jpg"
            alt="/"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }} // optional
            quality={100}
          />
        </div>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
      </div>
      <div className="embla__buttons  w-[96vw] justify-end">
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};
