"use client";
import * as React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Card } from "../ui/card";

const itemCard = ({ Items }: any) => {
  return (
    <div className="grid desktop:grid-cols-5 tablet:grid-cols-3 md:grid-cols-2 grid-flow-row gap-y-6 md:gap-x-6">
      {Items.map((util_item: any) => {
        return (
          <Card
            key={util_item.id}
            className="flex-1 flex-col max-w-[325px] h-[452px] relative"
          >
            <div className="m-[8px] space-y-[4px]">
              {/* title and description of item  */}
              <div className="flex flex-col w-full font-sans">
                {/* title and photo */}
                <div className="inline-block">
                  <h4 className={`pt-2 float-left flex-wrap w-3/4`}>
                    <strong>{util_item.name}</strong>
                  </h4>
                </div>
                {/* description text */}
                <div className="inline-block text-left pt-2">
                  <p className={`max-w-[75ch] leading-tight font-[12px] text-gray-400 `} >
                    {util_item.description}
                  </p>
                </div>
              </div>
            </div>
            {/* part addon */}
            <div className="flex flex-row bottom-0 absolute m-2">
              <div className="flex flex-row">
                <strong>{`$${util_item.price}`}</strong>
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
