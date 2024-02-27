import React from "react";
import Image from "next/image";
import "./appetizers.css";
import Menu from "./items.json";
import { Button } from "@/components/ui/button";
import MenuCard from "../MenuCard/MenuCard";

const Appetizers = () => {
  return (
    <main>
      <MenuCard Menu={Menu} />
      {/* <div className="flex flex-col w-full">
        <div className="text-4xl flex flex-row text-black antialiased font-bold items-center justify-center">
          <Image
            src="/gun01.svg"
            alt="gun icon for decor"
            className="rotate-45"
            width={70}
            height={50}
          />
          <div className="">Appetizers</div>
          <Image
            src="/gun01.svg"
            alt="gun icon for decor"
            className="gun_menu gun_rotate"
            width={70}
            height={50}
          />
        </div> */}
        {/* Mapping out the menu */}
        {/* <div className=" flex flex-wrap gap-8 pt-6 justify-between w-full">
          {Menu.map((menu_item) => {
            return (
              <div
                key={menu_item.id}
                className="flex flex-col flex-grow bg-blue-300 h-[452px] w-[325px] rounded-lg shadow-xl drop-shadow-xl"
              >
                <div className="h-[55%] relative w-full overflow-hidden">
                  <Image
                    src={`/${menu_item.photo}`}
                    alt="chili pepper spice"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    quality={100}
                    className="rounded-t-lg"
                  />
                </div>
                <h4 className="">
                  <strong>{menu_item.name}</strong>
                </h4>
                <p className="max-w-[75ch]">
                  Description: {menu_item.description}
                </p>
                <div className="flex flex-row bg-gray-500 justify-evenly">
                  <div className="bg-red-400 flex flex-row">
                    <span>
                      {menu_item.price_large ? (
                        <span>
                          <strong>Large</strong> - ${menu_item.price_large},
                          <strong>Small</strong> - ${menu_item.price_small}
                        </span>
                      ) : (
                        <span>${menu_item.price}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex bg-emerald-400 w-1/2 relative">
                    <div className="flex bg-blue-600 w-3 h-full items-end justify-end">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
        {/* <div className="col-span-2 gap-6 bg-green-400">
        <div className="flex flex-row space-x-2 bg-gray-400">
          <h4 className="text-semibold">
            Guacamole Dip 
            <div className="">
            <span>$7 - Large, $5 - small</span>
            </div>
          </h4>
          <p>
            Made fresh daily. Avocado, Pico de Gallo, Seasoning, with fresh lime
            juice.
          </p>
        </div>
        <div className="flex flex-row space-x-2 bg-pink-400">
          <h4>Chiles Toreados -</h4>
          <div className="flex relative space-x-6">
            <span>$5</span>
            <Image
              src="/red-chili-pepper.svg"
              alt="chili pepper spice"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              quality={100}
              className=""
            />
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Appetizers;
