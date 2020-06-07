import Link from "next/link";
import styles from "./../../../styling/Header.module.css";
import DropdownContent from "./../../Main/ServiceDropDown";
import Avatar from "./../../Student/NavAvatar";

const Header = (props) => {
    return (
        <React.Fragment>
            <div className={styles.headerWrapper}>
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
