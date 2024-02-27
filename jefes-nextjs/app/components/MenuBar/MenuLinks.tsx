"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Appetizers", href: "/menu" },
  { name: "Brunch", href: "/menu/Brunch" },
  { name: "Lunch", href: "/menu/Lunch" },
  { name: "Dinner", href: "/menu/Dinner" },
  { name: "Beverages", href: "/menu/Beverages" },
  { name: "Bar", href: "/menu/Bar" },
];

const MenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 bg-transparent p-3 text-xl font-semibold  hover:text-red-700 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-red-700": pathname === link.href,
              }
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default MenuLinks;
