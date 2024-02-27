"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const currentPath = usePathname();
  const nav = [
    { label: "HOME", href: "/" },
    { label: "MENU", href: "/menu" },
    { label: "ABOUT", href: "/about-us" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="bg-stone-900 w-full items-center justify-center md:h-[25vh] flex sm:h-[50svh] overflow-hidden">
      <div className=" w-[60%] flex flex-col md:flex-row text-white justify-evenly leading-relaxed items-center text-center mx-auto relative h-full">
        <div className="w-full h-full flex flex-col items-center justify-evenly relative">
          <div className="h-1/2 w-full relative -mt-2">
            {/* logo */}
            <Link href="/" className="">
              <Image
                src="/logo.svg"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                alt="Logo"
                sizes="(max-width: 25px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </Link>
          </div>
          <p className="flex flex-wrap w-[90%] relative items-center text-start justify-center text-base ">
            Jefes Mexican Cocina Y Cantina serves the best Mexican food in
            Broken Arrow, OK.
          </p>
        </div>

        <div className="flex-col w-full h-full items-center gap-4 relative top-4 md:flex hidden justify-center text-center">
          <h2 className="text-xl font-semibold italic antialiased">Pages</h2>
          <div className="bg-red-800 h-0.5 w-[20%]"></div>
          <div className=" items-center justify-center h-full">
            <ul className="flex flex-col text-base font-sans antialiased w-full leading-relaxed text-start pl-4">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-800'}`}
                  // replace with classnames object instead
                  className={classnames({
                    " text-white": link.href === currentPath,
                    "text-white": link.href !== currentPath,
                    "hover:text-red-800 hover:cursor-pointer": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full h-full items-center gap-4 top-4 relative ">
          <h2 className="text-xl font-semibold italic antialiased">
            Store Hours
          </h2>
          <div className="bg-red-800 h-0.5 w-[20%] "></div>
          <div className="flex flex-col justify-center items-center text-white w-full text-start leading-relaxed text-sm">
            <div className="flex flex-col pl-3 text-start">
              <h3>Monday - Thursday:</h3>
              <p>11:00am - 9:00pm</p>
            </div>
            <div className="flex flex-col  text-start">
              <h3>Friday - Saturday:</h3>
              <p>11:00am - 9:30pm</p>
            </div>
            <div className="flex flex-col text-start">
              <h3>Sunday:</h3>
              <p>11:00am - 8:00pm</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full items-center gap-4 top-4 relative">
          <h2 className="text-xl font-semibold italic antialiased">
            Follow Us
          </h2>
          <div className="bg-red-800 h-0.5 w-[20%] "></div>
          <div className="flex flex-row justify-evenly items-center text-white w-[60%] relative h-1/2">
            <a href="https://www.tiktok.com/@jefesbrokenarrow"><FaTiktok size={30} className="cursor-pointer" /></a>
            <a href="https://www.instagram.com/jefesbrokenarrow/"><AiOutlineInstagram size={30} className="cursor-pointer" /></a>
            <a href="https://www.facebook.com/jefesbrokenarrow"><AiOutlineFacebook size={30} className="cursor-pointer" /></a>
            {/* Grub hub link https://www.grubhub.com/restaurant/jefes-mexican-cocina-y-cantina-24188-e-hwy-51-broken-arrow/2735039?pickup=true&rwg_token=AAh05qZCcKFQ2Z7gD1Zk8cKMX6nulMnyaXXy0WFPLpaVJpzOl7Hmg_7_21m5_lqd6Px-CeiFlA0OBrR9wjNyhFbJLOA6sURn_fdyCxIc6A4f4duiviHGfos%3D */}
            {/* yelp link https://www.yelp.com/biz/jefes-mexican-cocina-and-cantina-broken-arrow */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
