"use client";
import React, { useLayoutEffect, useRef } from "react";
import MenuList from "./MenuList";
import ScrollContainer from "react-indiana-drag-scroll";

const MenuTab = () => {
  const tabRef = useRef(null);
  const handleTabClick = (e, index) => {
    if (index % 3 === 0) {
      const tabWidth = e.currentTarget.offsetWidth;
      const scrollTo = index * tabWidth;
      tabRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1000);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="tab-class text-center wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="scroll-wrapper">
        <ScrollContainer innerRef={tabRef} className="menu-scroll-container">
          <ul className="nav nav-pills border-bottom  mb-5 menuTab">
            {[...Array(50)].map((_, index) => {
              return (
                <li
                  className="nav-item"
                  key={index}
                  onClick={(e) => handleTabClick(e, index)}
                >
                  <a
                    className={`d-flex align-items-center text-start mx-3 pb-3 ${
                      index == 0 ? "active" : ""
                    }`}
                    data-bs-toggle="pill"
                    href={`#tab-${index + 1}`}
                  >
                    <i className="fa fa-hamburger fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </ScrollContainer>
      </div>
      <div className="tab-content">
        {[...Array(20)].map((_, index) => {
          return (
            <div
              id={`tab-${index + 1}`}
              className={`tab-pane fade show p-0 ${index == 0 ? "active" : ""}`}
              key={index}
            >
              <MenuList data={index + 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTab;
