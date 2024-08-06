"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3" />
            Restoran
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link
              href="/menu"
              className={`nav-item nav-link ${
                pathname === "/" || pathname === "/menu/" ? "active" : ""
              }`}
            >
              Menu
            </Link>

            <Link href="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`container-xxl py-5 bg-dark hero-header ${
          pathname === "/" ? "homeContent" : ""
        }`}
      >
        <div className="container-xxl">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Lezzetli Yemeğimizin
                <br />
                Keyfini Çıkarın
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Özenle hazırlanan taze ve nefis yemeklerimizle damak tadınıza
                hitap ediyoruz. Geniş menümüzden seçeceğiniz her bir lezzet,
                kaliteli malzemelerle ve büyük bir titizlikle hazırlanmıştır.
                Sevdiklerinizle birlikte hoş bir yemek deneyimi yaşayın.
              </p>
              <a
                href=""
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Menüye Git
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="/img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
