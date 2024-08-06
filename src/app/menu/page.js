import { MenuCard } from "@/components/menu/MenuCard";
import MenuList from "@/components/menu/MenuList";
import MenuTab from "@/components/menu/MenuTab";
import React from "react";

export const metadata = {
  title: "Menü",
};

const Page = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          suppressHydrationWarning
          className="text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            ALAÇATI
          </h5>
          <h1 className="mb-5">Menü</h1>
        </div>
        <MenuTab />
      </div>
    </div>
  );
};

export default Page;
