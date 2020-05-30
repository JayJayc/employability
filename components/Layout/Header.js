import Link from "next/link";
import styles from "./../../styling/Header.module.css";
import Modal from "./LoginModal";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const linkStyle = {
    marginLeft: 15,
};

const NavMenu = (open) => {
    let classNames;
    if (open.clicked) {
        classNames = (styles.navMenu, styles.active);
    } else {
        classNames = styles.navMenu;
    }
    return (
        <div className={classNames}>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    );
};

const Header = (props) => {
    const [menuClicked, setMenuClicked] = useState(false);
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
        console.log(currPos.x);
        console.log(currPos.y);
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
                    page === "home" && topOfHome && !menuClicked
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
                <div className={styles.banner}>
                    <div className={styles.inner}>
                        <Link href="/">
                            <a>Logo</a>
                        </Link>
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
                            <span className={styles.bannerLink}>
                                Become A Coach
                            </span>
                        </div>
                    </div>
                </div>
                <header className={[styles.header, styles.sticky].join(" ")}>
                    <div className={styles.navBar}>
                        <ul className={styles.links}>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li onClick={() => setMenuClicked(!menuClicked)}>
                                <div class={styles.dropdown}>
                                    <div class={styles.dropbtn}>
                                        Services
                                        <i class="fa fa-caret-down"></i>
                                    </div>
                                    <div class={styles.dropdownContent}>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setMenuClicked(!menuClicked)}>
                                About
                            </li>

                            {loggedIn ? (
                                <li>
                                    <Link href="/dashboard">
                                        <a className="card">Visit Dashboard</a>
                                    </Link>
                                </li>
                            ) : null}
                            <li onClick={() => setMenuClicked(!menuClicked)}>
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
            {showModal ? (
                <Modal setShowModal={setShowModal} firebase={firebase} />
            ) : null}
            <NavMenu clicked={menuClicked} />
        </React.Fragment>
    );
};

export default Header;
