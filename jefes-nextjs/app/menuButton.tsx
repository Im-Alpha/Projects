"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const MenuButton = () => {
  return (
    <div>
      <div className="right-2 hidden md:block">
        <Button
          size="sm"
          className="xl:text-lg  bg-zinc-900 hover:bg-slate-600"
        >
          <span className="flex flex-row px-3">
            <span className="flex flex-row">
              <Link href="/menu">VIEW MENU</Link>
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default MenuButton;
