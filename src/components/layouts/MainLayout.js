import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import ClientLoadingComponent from "../ClientLoadingComponent";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <ClientLoadingComponent />
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
