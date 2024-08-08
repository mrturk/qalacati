import React from "react";
import styles from "./menucard.module.css";
const MenuCard = () => {
  return (
    <div className={styles.menuCard}>
      <div className={styles.cardImage}>
        <img src="/images/menu-1.jpg" />
      </div>
      <div className={styles.menuContentWrapper}>
        <div className={styles.menuContent}>
          <div className={styles.titleAndPrice}>
            <h4>Hamburger</h4>
            <p>150 TL</p>
          </div>
          <div>
            <p>qweqwe qweqwe qweqweqweqwe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
