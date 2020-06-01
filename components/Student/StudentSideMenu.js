import styles from "./../../styling/Student.module.css";
import React, { useEffect, useState } from "react";

const NavColumn = (props) => {
    return (
        <div className={styles.navColumnWrapper}>
            <div className={styles.navColumn}>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src="/avatar.png" />
                </div>
                <div className={styles.navItemWrapper}>
                    <div className={styles.navItem}>Dashboard</div>
                    <div className={styles.navItem}>Payment History</div>
                    <div className={styles.navItem}>Payment Method</div>
                    <div className={styles.navItem}>Refer A Friend</div>
                    <div className={styles.navItem}>Settings</div>
                </div>
            </div>
        </div>
    );
};
export default NavColumn;
