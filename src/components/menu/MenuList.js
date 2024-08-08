"use client";
import React, { useRef, useState } from "react";
import styles from "./menulist.module.css";
import ScrollContainer from "react-indiana-drag-scroll";

const MenuList = () => {
  const tabRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (e, index) => {
    setActiveTab(index);
    const tabWidth = e.currentTarget.offsetWidth;
    const scrollTo = index * tabWidth;
    tabRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.tablistContainer}>
      <ScrollContainer innerRef={tabRef} className={styles.scrollContainer}>
        <ul className={styles.tabList}>
          {[...Array(10)].map((_, index) => {
            return (
              <li onClick={(e) => handleTabClick(e, index)} key={index}>
                <button
                  className={`${styles.tabButton} ${
                    index === activeTab ? styles.active : ""
                  }`}
                >
                  Sıcak İçecekler
                </button>
              </li>
            );
          })}
        </ul>
      </ScrollContainer>
    </div>
  );
};

export default MenuList;
