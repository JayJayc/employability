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
                                <Link href="/student/services">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/student/requests">
                                    <a>My Requests</a>
                                </Link>
                            </li>
                            <li>Notifications</li>
                            <Avatar />
                        </ul>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
};

export default Header;
