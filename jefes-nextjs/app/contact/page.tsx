import React from "react";
import { string } from "zod";
import Form from "./form";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

const contact = () => {
  return (
    <main>
      <div className="flex flex-col relative justify-center items-center">
      <div className="flex relative pt-40 w-[100vw] h-[400px] overflow-hidden">
        <Image
          src="/IMG_2431.jpg"
          alt="nav image"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          className="brightness-[20%] "
        />
        <div className="flex flex-col w-full text-center xl:text-5xl xl:block text-white lg:text-2xl z-10">
          <div className="p-6 ">
            <p className="py-4">
              <span className="">About Us</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-800 w-full">
      <div>Contact Us Today</div>
        <Calendar />
        <Form />
      </div>
        
      </div>
      
    </main>
  );
};

export default contact;
