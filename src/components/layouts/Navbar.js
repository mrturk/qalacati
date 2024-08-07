import Link from "next/link";
import React from "react";

const Navbar = () => {
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
          <Link className="navbar-brand" href="/">
            <img src="images/logo.png" className="logo" alt="" />
          </Link>
        </div>
        {/* End Header Navigation */}
      </div>
      {/* Start Side Menu */}
      <div className="side">
        <a href="#" className="close-side">
          <i className="fa fa-times" />
        </a>
        <div className="widget">
          <h6 className="title">Menu</h6>
          <ul className="link">
            <li>
              <Link href="/menu" title="Menü">
                Menü
              </Link>
            </li>

            <li>
              <Link href="/contact" title="Menü">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End Side Menu */}
    </nav>
  );
};

export default Navbar;
