import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
      <Footer />
      <div className="scrollup">
        <Link href="#">
          <i className="fa fa-chevron-up" />
        </Link>
      </div>
    </div>
  );
};

export default MainLayout;
