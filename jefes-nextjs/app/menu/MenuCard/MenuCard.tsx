"use client";
import * as React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Card } from "@/components/ui/card";

const interBold = localFont({
  src: "./Inter-Bold.woff",
  display: "swap",
});
const extraBold = localFont({
  src: "./Inter-ExtraBold.woff",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

const MenuCard = ({ Menu }: any) => {
  return (
    <div className="grid desktop:grid-cols-5 tablet:grid-cols-3 md:grid-cols-2 grid-flow-row gap-y-6 md:gap-x-6">
      {Menu.map((menu_item: any) => {
        return (
          <Card
            key={menu_item.id}
            className="flex-1 flex-col max-w-[325px] h-[452px] relative"
          >
            <div className="w-full h-[55%]">
              <div className="h-full relative w-full">
                <Image
                  src={`/${menu_item.photo}`}
                  alt="chili pepper spice"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={75}
                  sizes="(max-width: 325px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="flex"
                />
              </div>
            </div>
            <div className="m-[8px] space-y-[4px]">
              {/* title and description of item  */}
              <div className="flex flex-col w-full font-sans">
                {/* title and photo */}
                <div className="inline-block">
                  <h4
                    className={`pt-2 float-left ${extraBold.className} flex-wrap w-3/4`}
                  >
                    <strong>{menu_item.name}</strong>
                  </h4>
                  <div className="right-4 absolute h-[25px] flex flex-row w-1/4 mt-2">
                    {menu_item.spicy === "yes" ? (
                      <Image
                        src="/red-chili-pepper.svg"
                        alt="chili pepper spice"
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        quality={100}
                        sizes="(max-width: 25px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="flex"
                        
                      />
                    ) : (
                      <div className="hidden"></div>
                    )}
                    {menu_item.favorite === "yes" ? (
                      <Image
                        src="/star.svg"
                        alt="chili pepper spice"
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "right",
                        }}
                        quality={100}
                        sizes="(max-width: 25px) 100vw, (max-width: 325px) 50vw, 33vw"
                        className="flex"
                      />
                    ) : (
                      <div className="hidden"></div>
                    )}
                  </div>
                </div>
                {/* description text */}
                <div className="inline-block text-left pt-2">
                  <p
                    className={`max-w-[75ch] ${inter.className} leading-tight font-[12px] text-gray-400 `}
                  >
                    {menu_item.description}
                  </p>
                </div>
              </div>
            </div>
            {/* cart addon */}
            <div className="flex flex-row bottom-0 absolute m-2">
              <div className="flex flex-row">
                <strong>{`$${menu_item.price}`}</strong>
              </div>
              <div className="flex  w-1/2 relative">
                <div className="flex  w-3 h-full items-end justify-end">
                  <div className=""></div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MenuCard;
