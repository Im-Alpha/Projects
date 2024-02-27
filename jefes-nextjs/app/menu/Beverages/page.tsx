import React from "react";
import Menu from "./items.json";
import MenuCard from "../MenuCard/MenuCard";

const page = () => {
  return (
    <main>
      <MenuCard Menu={Menu} />
    </main>
  );
};

export default page;
