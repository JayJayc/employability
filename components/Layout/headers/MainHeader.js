import Link from "next/link";
import styles from "./../../../styling/Header.module.css";
import Modal from "../LoginModal";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import DropdownContent from "./../../Main/ServiceDropDown";
import { auth } from "../../../src/firebase";

const Header = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loginText, setLoginText] = useState("Login");
    const { page } = props;
    const [topOfHome, setTopOfHome] = useState(true);

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            setTopOfHome(false);
        } else {
            setTopOfHome(true);
        }
    });
    // TODO
    // if (user) {
    //     setLoggedIn(true);
    //     setLoginText("Hi, " + name);
    // } else {
    //     setLoggedIn(false);
    //     setLoginText("Login");
    // }

    const handleLogin = (loggedIn, setLoggedIn, setShowModal) => {
        console.log(loggedIn);
        if (!loggedIn) {
            setShowModal(true);
        } else {
            auth.signOut()
                .then(function () {
                    // Sign-out successful.
                    setLoggedIn(false);
                })
                .catch(function (error) {
                    console.log(error);
                    // An error happened
                });
        }
    };
    return (
        <React.Fragment>
            <div
                className={
                    page === "home" && topOfHome
                        ? [
                              styles.headerWrapper,
                              styles.homepage,
                              styles.faded,
                          ].join(" ")
                        : page === "home"
                        ? [styles.headerWrapper, styles.homepage].join(" ")
                        : styles.headerWrapper
                }
            >
                <header className={[styles.header, styles.sticky].join(" ")}>
                    <div className={styles.navBar}>
                        <ul className={styles.links}>
                            <li>
                                <Link href="/">
                                    <a>Logo</a>
                                </Link>
                            </li>
                            <li>
                                <div className={styles.dropdown}>
                                    <div className={styles.dropbtn}>
                                        Services
                                    </div>
                                    <DropdownContent />
                                </div>
                            </li>

                            <li>FAQ</li>
                            <div className={styles.bannerRightContainer}>
                                <span
                                    onClick={(e) => {
                                        handleLogin(
                                            loggedIn,
                                            setLoggedIn,
                                            setShowModal
                                        );
                                    }}
                                    id="firebaseui-auth-container"
                                    className={styles.bannerLink}
                                >
                                    {loginText}
                                </span>
                                {loggedIn ? null : (
                                    <span className={styles.bannerLink}>
                                        Sign up
                                    </span>
                                )}
                                {loggedIn ? null : (
                                    <span className={styles.bannerLink}>
                                        Become A Coach
                                    </span>
                                )}
                            </div>
                        </ul>
                    </div>
                </header>
            </div>
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </React.Fragment>
    );
};

export default Header;
