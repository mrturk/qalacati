"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const closeButtonRef = useRef(null);

  const menuLinkClick = () => {
    closeButtonRef.current.click();
  };

  return (
    <nav className="navbar navbar-default bootsnav no-background navbar-fixed black">
      <div className="container">
        {/* Start Atribute Navigation */}
        <div className="attr-nav">
          <ul>
            <li className="side-menu">
              <Link href="#">
                <i className="fa fa-bars" />
              </Link>
            </li>
          </ul>
        </div>
        {/* End Atribute Navigation */}
        {/* Start Header Navigation */}
        <div className="navbar-header">
          <Link
            className="navbar-brand"
            style={{ position: "relative" }}
            href="/"
          >
            <div>
              <img src="/images/header-logo.png" className="logo" alt="" />
            </div>
          </Link>
        </div>
        {/* End Header Navigation */}
      </div>
      {/* Start Side Menu */}
      <div className="side">
        <Link href="#" ref={closeButtonRef} className="close-side">
          <i className="fa fa-times" />
        </Link>
        <div className="widget">
          <Link href="/" onClick={menuLinkClick}>
            <h6 className="title">Anasayfa</h6>
          </Link>
          <ul className="link">
            <li>
              <Link
                href="/food-menu"
                title="Yiyecek Menü"
                style={{ color: pathname === "/food-menu/" ? "#d1b980" : "" }}
                onClick={menuLinkClick}
              >
                Yiyecek Menü
              </Link>
            </li>
            <li>
              <Link
                href="/drink-menu"
                title="İçecek Menü"
                style={{ color: pathname === "/drink-menu/" ? "#d1b980" : "" }}
                onClick={menuLinkClick}
              >
                İçecek Menü
              </Link>
            </li>
            {/* <li>
              <Link
                href="/contact"
                title="Menü"
                style={{ color: pathname === "/contact/" ? "#d1b980" : "" }}
                onClick={menuLinkClick}
              >
                İletişim
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
