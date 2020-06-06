import Link from "next/link";
import styles from "./../../../styling/Header.module.css";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import DropdownContent from "./../../Main/ServiceDropDown";
import Avatar from "./../../Student/NavAvatar";

const Header = (props) => {
    const { page } = props;
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
                                <div className={styles.dropdown}>
                                    <div className={styles.dropbtn}>
                                        Services
                                    </div>
                                    <DropdownContent />
                                </div>
                            </li>
                            <li>Student</li>
                            <li>Contact Us</li>
                            <Avatar />
                        </ul>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
};

export default Header;
