import React from "react";
import styles from "./menucard.module.css";
const MenuCard = ({ menuItem }) => {
  return (
    <div className={styles.menuCard}>
      <div className={styles.cardImage}>
        <img src="/images/menu-1.jpg" />
      </div>
      <div className={styles.menuContentWrapper}>
        <div className={styles.menuContent}>
          <div className={styles.titleAndPrice}>
            <h4>{menuItem?.itemName}</h4>
            <p>{menuItem?.singlePrice} TL</p>
          </div>
          {menuItem?.description && (
            <div>
              <p>{menuItem.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
