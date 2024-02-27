import React from "react";
import Image from "next/image";
import MenuLinks from "../components/MenuBar/MenuLinks";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col relative justify-center items-center">
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
              <span className="">Menu</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly pt-4">
        <MenuLinks />
      </div>
      <div className="flex flex-row items-center justify-evenly text-xl relative font-normal mt-4">
        <span className="grid grid-rows-1 grid-cols-2">
          Spicy-
          <div className="relative w-1/2">
            <Image
              src="/red-chili-pepper.svg"
              alt="chili pepper spice"
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
              className=""
            />
          </div>
        </span>
        <span className="grid grid-cols-2">
          Favorite-
          <div className="relative w-1/3">
            <Image
              src="/star.svg"
              alt="chili pepper spice"
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
              className=""
            />
          </div>
        </span>
      </div>

      <div className="flex-grow w-full h-full p-6 md:overflow-y-auto md:px-14">
        {children}
      </div>
    </div>
  );
};

export default layout;
