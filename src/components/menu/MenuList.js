"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./menulist.module.css";
import ScrollContainer from "react-indiana-drag-scroll";
import MenuCard from "./MenuCard";
import { getMenuGroups } from "@/services/menugrup";
import { getMenuItemById } from "@/services/menuitem";
import LoadingComponent from "../LoadingComponent";

const MenuList = ({ isDrink = false }) => {
  const tabRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [menuGroups, setMenuGroups] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tabLoading, setTabLoading] = useState(false);

  const getMenuItems = async (id) => {
    setTabLoading(true);
    const response = await getMenuItemById(id);
    setMenuItems(response.data);
    setTabLoading(false);
  };

  const handleTabClick = (e, group, index) => {
    setActiveTab(index);
    getMenuItems(group.id);
    const tabWidth = e.currentTarget.offsetWidth;
    const tabOffsetLeft = e.currentTarget.offsetLeft;
    const scrollContainer = tabRef.current;

    const scrollTo =
      tabOffsetLeft - scrollContainer.offsetWidth / 2 + tabWidth / 2;
    tabRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  const prepareMenuGroup = useCallback(async () => {
    const response = await getMenuGroups();
    const newData = isDrink
      ? response.data.filter((group) => group.groupName.includes("(isdrink)"))
      : response.data.filter((group) => !group.groupName.includes("(isdrink)"));
    setMenuGroups(newData);
    setIsLoading(false);
    if (newData.length > 0) {
      await getMenuItems(newData[0].id);
    }
  }, []);

  useEffect(() => {
    prepareMenuGroup();
  }, []);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className={styles.tablistContainer}>
        <ScrollContainer
          innerRef={tabRef}
          className={`${styles.scrollContainer}`}
        >
          <ul className={styles.tabList}>
            {menuGroups.map((group, index) => {
              return (
                <li
                  onClick={(e) => handleTabClick(e, group, index)}
                  key={index}
                >
                  <button
                    className={`${styles.tabButton} ${
                      index === activeTab ? styles.active : ""
                    }`}
                  >
                    {group.groupName.replace("(isdrink)", "")}
                  </button>
                </li>
              );
            })}
          </ul>
        </ScrollContainer>
      </div>
      {tabLoading ? (
        <div id="loading-center-absolute">
          <div className="object" id="object_one" />
          <div className="object" id="object_two" />
          <div className="object" id="object_three" />
          <div className="object" id="object_four" />
          <div className="object" id="object_five" />
          <div className="object" id="object_six" />
          <div className="object" id="object_seven" />
          <div className="object" id="object_eight" />
          <div className="object" id="object_big" />
        </div>
      ) : (
        menuGroups.map((_, index) => {
          if (index === activeTab) {
            return (
              <div className={`container ${styles.show}`} key={index}>
                <div className="row">
                  {menuItems.map((menuItem, index) => {
                    return (
                      <div key={index} className="col-sm-6">
                        <MenuCard menuItem={menuItem} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })
      )}
    </>
  );
};

export default MenuList;
