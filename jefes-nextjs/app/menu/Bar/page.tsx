import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Menu from "./items.json";
import Image from "next/image";
import MenuCard from "../MenuCard/MenuCard";

const Bar = () => {
  return (
    <main>
      <MenuCard Menu={Menu} />
    </main>
  );
};

export default Bar;
