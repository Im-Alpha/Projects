"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Reserve from "./reserveButton";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { RiCellphoneLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import StoreHours from "../StoreHours/StoreHours";
import { Button } from "@/components/ui/button";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const NavBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath);
  const [menu_open, set_menu_open] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    set_menu_open(!menu_open);
  };

  // Create an array to hold the list items
  const links = [
    { label: "HOME", href: "/" },
    { label: "MENU", href: "/menu" },
    // { label: "GALLERY", href: "/gallery" },
    { label: "ABOUT", href: "/about-us" },
    { label: "CONTACT", href: "/contact" },
  ];
  // Create an array to hold the list items
  const links2 = [
    { label: "ABOUT", href: "/about-us" },
    // { label: "REVIEWS", href: "/reviews" },
    { label: "CONTACT", href: "/contact" },
    // { label: "Dashboard", href: "/dashboard" },
    { label: "RESERVE", href: "/reservations" },
    // { label: "Issues", href: "/issues" },
  ];

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    // Your client-side code that uses window goes here
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav>
      {/* <center className="text-accent bg-black">0</center> */}
      <div
        className={
          navbar
            ? "flex fixed top-0 items-center bg-zinc-800 justify-center xl:p-1 mx-auto md:p-4 z-10 w-full h-[60px]"
            : "flex flex-col bg-transparent mx-auto absolute z-10 w-full h-[220px]"
        }
      >
        {/* Top Bar */}
        <div
          className={
            navbar ? "hidden" : "w-full text-white flex flex-col h-[7svh]"
          }
        >
          <div className="flex flex-row h-full">
            {/* left side  */}
            <div className="flex w-1/2 lg:gap-6 gap-4 relative lg:left-20 left-0 ">
              <div className="flex items-center justify-center gap-1 z-10">
                <a
                  href="https://www.google.com/maps/place/Jefe's+Mexican+Cocina+Y+Cantina/@36.0190665,-95.7069482,15z/data=!4m14!1m7!3m6!1s0x87b6624073d4ee43:0x4e3732654d129041!2sJefe's+Mexican+Cocina+Y+Cantina!8m2!3d36.0190665!4d-95.7069482!16s%2Fg%2F11f0wkrmd3!3m5!1s0x87b6624073d4ee43:0x4e3732654d129041!8m2!3d36.0190665!4d-95.7069482!16s%2Fg%2F11f0wkrmd3?entry=ttu"
                  className="flex items-center justify-center gap-1"
                >
                  <div className="text-xl brightness-90">
                    <IoLocationSharp />
                  </div>
                  <span className="flex flex-wrap brightness-90 font-sans text-sm">
                    24188 E Hwy 51, Broken Arrow, OK 74014
                  </span>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <StoreHours />
              </div>
            </div>
            {/* right side  */}
            <div className="flex lg:flex-row flex-wrap w-1/2 relative lg:right-20 right-2 justify-end gap-6 items-center ">
              <div className="flex items-center gap-1">
                <div>
                  <FaPhone />
                </div>
                <div className="text-sm brightness-90">
                  <a href="tel:9188880844">(918)-888-0844</a>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-xl">
                  <IoIosMail />
                </div>
                <div className="flex text-sm brightness-90">
                  <a href="mailto:jefesmexicanba@gmail.com">
                    jefesmexicanba@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white brightness-50"></div>
        </div>

        {/* Phone Number  */}
        <div
          className={
            navbar
              ? "hover:cursor-pointer hidden md:flex flex-wrap xl:text-xl font-sans antialiased z-90 text-white left-10 absolute "
              : "hidden"
          }
        >
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-1 font-sans">
              <FaPhone />
              <span className="text-base brightness-95">
                <a href="tel:9188880844">(918)-888-0844</a>
              </span>
            </div>
            <div className="text-base">
              <StoreHours />
            </div>
          </div>
        </div>

        {/* logo */}
        <Link href="/" className="absolute left-32 pt-20">
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "40%", height: "auto" }}
            alt="Logo"
            className={navbar ? "hidden" : "hidden xl:block logo brightness-75"}
          />
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "50%", height: "auto" }}
            alt="Logo"
            className="block md:hidden"
          />
        </Link>

        {/* Pages */}
        <ul
          className={
            navbar
              ? "hover:cursor-pointer hidden md:flex space-x-4 xl:text-xl font-sans antialiased z-90 w-1/4 absolute justify-center items-center brightness-95"
              : "hover:cursor-pointer hidden relative md:flex gap-4 xl:text-xl font-sans antialiased w-full justify-center items-center text-center brightness-90 h-[18svh] z-90"
          }
        >
          {links.map((link) => (
            <Link
              key={link.href}
              // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-800'}`}
              // replace with classnames object instead
              className={classnames({
                "border-b-2 border-red-800 text-white":
                  link.href === currentPath,
                "text-white": link.href !== currentPath,
                "hover:text-red-800": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Reservation button */}
        <div
          className={
            navbar
              ? "flex absolute items-center justify-end mx-auto z-10 w-1/4 h-[60px] right-0"
              : "absolute hidden md:flex flex-wrap gap-1 w-1/4 justify-end top-32 z-10 right-0"
          }
        >
          <div className="flex sticky right-3 gap-1">
            <Button
              size="sm"
              className="xl:text-lg bg-red-800 hover:bg-slate-800 text-xs"
            >
              RESERVE NOW
            </Button>
            <Reserve />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className={menu_open ? "hidden" : ""}>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer pl-24 text-white top-3 right-3 absolute"
        >
          <GiHamburgerMenu size={25} />
        </div>
      </div>

      <div className={menu_open ? "" : "hidden"}>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer top-3 right-3 absolute z-20 ease-in duration-500"
        >
          <Image src="/fork.svg" width={20} height={20} alt="fork" />
        </div>
      </div>

      <div
        className={
          menu_open
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#18191a] p-10 ease-in duration-300 z-90"
            : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex flex-col py-32 w-full items-center justify-center">
          <ul className="hover:cursor-pointer flex flex-col gap-8 items-center justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-800'}`}
                // replace with classnames object instead
                onClick={() => set_menu_open(false)}
                className={classnames({
                  "border-b-2 border-white text-red-700":
                    link.href === currentPath,
                  "text-red-700": link.href !== currentPath,
                  "hover:text-red-700": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <ul className="hover:cursor-pointer flex flex-col gap-8 items-center justify-center py-8">
            {links2.map((link) => (
              <Link
                key={link.href}
                // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-800'}`}
                // replace with classnames object instead
                onClick={() => set_menu_open(false)}
                className={classnames({
                  "border-b-2 border-white text-red-700":
                    link.href === currentPath,
                  "text-red-700": link.href !== currentPath,
                  "hover:text-red-700": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-around  items-center text-red-800">
          <FaTiktok size={30} className="cursor-pointer" />
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
