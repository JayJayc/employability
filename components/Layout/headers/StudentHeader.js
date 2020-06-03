import Link from "next/link";
import styles from "./../../../styling/Header.module.css";
import Modal from "../LoginModal";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
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
    const { page } = props;
    const [loggedIn, setLoggedIn] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [loginText, setLoginText] = useState("Login");
    const [topOfHome, setTopOfHome] = useState(true);
    const [state, setState] = useContext(UserContext);
    const firebase = state.firebase;

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            setTopOfHome(false);
        } else {
            setTopOfHome(true);
        }
        console.log(currPos.x);
        console.log(currPos.y);
    });

    const handleLogOut = (loggedIn, setLoggedIn, setShowModal) => {
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
                <header className={[styles.header, styles.sticky].join(" ")}>
                    <div className={styles.navBar}>
                        <ul className={styles.links}>
                            <Link href="/">
                                <img className={styles.logo} src="/logo1.jpg" />
                            </Link>
                            <li>
                                <Link href="/student">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
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
                            <li>Student</li>

                            {loggedIn ? (
                                <li>
                                    <Link href="/dashboard">
                                        <a className="card">Visit Dashboard</a>
                                    </Link>
                                </li>
                            ) : null}
                            <li>Contact Us</li>
                            <div className={styles.avatarWrapper}>
                                <img
                                    className={styles.avatar}
                                    src="/avatar.png"
                                />
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
