import styles from "./../../styling/Header.module.css";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./../UserContext";
import { auth } from "../../src/firebase";
const Avatar = (props) => {
    const [user, setUser] = useContext(UserContext);

    const handleLogOut = () => {
        if (!user) {
            console.log(user);
            setShowModal(true);
        } else {
            auth.signOut()
                .then(function () {
                    // Sign-out successful.
                })
                .catch(function (error) {
                    console.log(error);
                    // An error happened
                });
        }
    };
    return (
        <div className={styles.avatarWrapper}>
            <div className={styles.avatarDropdown}>
                <div className={styles.dropbtn}>
                    <img className={styles.avatar} src="/avatar.png" />
                </div>
                <div className={styles.avatarDropdownContent}>
                    <div
                        className={styles.avatarDropdownLink}
                        onClick={handleLogOut}
                    >
                        <p className={styles.avatarDropdownText}>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Avatar;
