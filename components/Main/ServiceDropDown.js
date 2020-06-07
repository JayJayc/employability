import Link from "next/link";
import styles from "./../../styling/Header.module.css";

const DropdownContent = () => {
    return (
        <div className={styles.dropdownContent}>
            <div className={styles.dropdownContentColumn}>
                <Link href="/services/buddies">
                    <a>Buddies</a>
                </Link>
                <p>Your Peers</p>
                <div>
                    <Link href="/services/buddies">
                        <a className={styles.subheadingLink}>
                            Incognito Buddies
                        </a>
                    </Link>
                    <p>
                        Buddies identity is not disclosed for their protection
                    </p>
                    <Link href="/services/buddies">
                        <a className={styles.subheadingLink}>Known Buddies</a>
                    </Link>
                    <p>Buddies identity is disclosed for your peace of mind</p>
                </div>
            </div>
            <div className={styles.dropdownContentColumn}>
                <Link href="/services/mentors">
                    <a>Mentors</a>
                </Link>
                <p>Industry experts</p>
                <div>
                    <Link href="/services/mentors">
                        <a className={styles.subheadingLink}>
                            Incognito Mentors
                        </a>
                    </Link>
                    <p>
                        Mentors' identities is not disclosed for their
                        protection
                    </p>
                    <Link href="/services/mentors">
                        <a className={styles.subheadingLink}>Known Mentors</a>
                    </Link>
                    <p>
                        Mentors' identities is disclosed for your peace of mind
                    </p>
                </div>
            </div>
            <div className={styles.dropdownContentColumn}>
                <Link href="/services/advisers">
                    <a>Advisers</a>
                </Link>
                <p>Personal HR Coach</p>
                <div>
                    <Link href="/services/advisers">
                        <a className={styles.subheadingLink}>
                            Incognito Advisers
                        </a>
                    </Link>
                    <p>
                        Advisers' identities is not disclosed for their
                        protection
                    </p>
                    <Link href="/services/advisers">
                        <a className={styles.subheadingLink}>Known Advisers</a>
                    </Link>
                    <p>
                        Advisers' identities is disclosed for your peace of mind
                    </p>
                </div>
            </div>
        </div>
    );
};
export default DropdownContent;
