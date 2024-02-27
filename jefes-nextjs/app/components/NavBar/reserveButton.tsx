"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Reserve = () => {
  return (
    <div>
      <div className="right-2 hidden md:block">
        <Button
          size="sm"
          className="xl:text-lg bg-red-800 hover:bg-slate-800 text-xs"
        >
          <span className="flex flex-row">
            <span className="flex flex-row">
              <a href="https://www.grubhub.com/restaurant/jefes-mexican-cocina-y-cantina-24188-e-hwy-51-broken-arrow/2735039?pickup=true&rwg_token=AAh05qZCcKFQ2Z7gD1Zk8cKMX6nulMnyaXXy0WFPLpaVJpzOl7Hmg_7_21m5_lqd6Px-CeiFlA0OBrR9wjNyhFbJLOA6sURn_fdyCxIc6A4f4duiviHGfos%3D">
                ORDER ONLINE
              </a>
            </span>
          </span>
          {/* <Image
            src="/fork.svg"
            width={30}
            height={30}
            alt="fork"
            className="pl-2 xl:block hidden"
          />
          <Image
            src="/fork.svg"
            width={20}
            height={20}
            alt="fork"
            className="pl-2 xl:hidden block"
          /> */}
        </Button>
      </div>
    </div>
  );
};

export default Reserve;
