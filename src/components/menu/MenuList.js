import React from "react";
import { MenuCard } from "./MenuCard";

const MenuList = ({ data }) => {
  return (
    <div className="row g-4">
      <MenuCard price={data} />
    </div>
  );
};

export default MenuList;
