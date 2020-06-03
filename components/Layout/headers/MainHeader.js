import Link from "next/link";
import styles from "./../../../styling/Header.module.css";
import Modal from "../LoginModal";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import DropdownContent from "./../../Main/ServiceDropDown";

const Header = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loginText, setLoginText] = useState("Login");
    const [state, setState] = useContext(UserContext);
    const { page } = props;
    const firebase = state.firebase;
    const [topOfHome, setTopOfHome] = useState(true);

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            setTopOfHome(false);
        } else {
            setTopOfHome(true);
        }
    });
    console.log(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;
        var name;

        if (user != null) {
            try {
                name = user.displayName;
            } catch (err) {
                // User exists but has no name
                console.log(err);
            }
        }
        if (user) {
            setLoggedIn(true);
            setLoginText("Hi, " + name);
        } else {
            setLoggedIn(false);
            setLoginText("Login");
        }
    });
    const handleLogin = (loggedIn, setLoggedIn, setShowModal) => {
        console.log(loggedIn);
        if (!loggedIn) {
            setShowModal(true);
        } else {
            firebase
                .auth()
                .signOut()
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
                                <div class={styles.dropdown}>
                                    <div class={styles.dropbtn}>
                                        Services
                                        <i class="fa fa-caret-down"></i>
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
                                {loggedIn ? (
                                    <Link href="/dashboard">
                                        <div className={styles.avatarWrapper}>
                                            <img
                                                className={styles.avatar}
                                                src="/avatar.png"
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    <span className={styles.bannerLink}>
                                        Become A Coach
                                    </span>
                                )}
                            </div>
                        </ul>
                    </div>
                </header>
            </div>
            {showModal ? (
                <Modal setShowModal={setShowModal} firebase={firebase} />
            ) : null}
        </React.Fragment>
    );
};

export default Header;
