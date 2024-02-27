import React from "react";
import Appetizers from "./Appetizers/page";
import Image from "next/image";

const menu = () => {
  return (
    <div className="flex flex-col relative justify-center items-center ">
      <Appetizers />
    </div>
  );
};

export default menu;