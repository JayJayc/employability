import WithStudentLayout from "../components/Layout/StudentLayout";
import styles from "./../styling/Student.module.css";
import React, { useEffect, useState } from "react";

const Dashboard = (props) => {
    const [scrolled, setScrolled] = useState("");

    const scrollProgress = () => {
        const scrollPx = document.getElementById("viewportContainer").scrollTop;
        const winHeightPx =
            document.getElementById("viewportContainer").scrollHeight -
            document.getElementById("viewportContainer").clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

        setScrolled(scrolled);
    };

    useEffect(() => {
        document
            .getElementById("viewportContainer")
            .addEventListener("scroll", scrollProgress);
    }, []);
    const progressBarScrolled = {
        width: scrolled,
    };
    return (
        <div>
            <div id={"viewportContainer"} className={styles.viewportContainer}>
                <div className={styles.progressContainerStyle}>
                    <div
                        className={styles.progressBarStyle}
                        style={progressBarScrolled}
                    />
                </div>
                <div className={styles.viewport}>
                    <h1>Discovery</h1>
                    <h2>Find your passion</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className={styles.viewport}>
                    <h1>Exploration</h1>
                    <h2>Shortlist Employers</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className={styles.viewport}>
                    <h1>Analyse</h1>
                    <h2>Craft resumes and cover letters</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className={styles.viewport}>
                    <h1>Prepare</h1>
                    <h2>Start preparation for interviews</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className={styles.viewport}>
                    <h1>Adapt</h1>
                    <h2>Ready for anything in the interviews</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
            <div className={styles.profile}>
                <h1>Profile</h1>
                <p>You can't go into this page if you are not authenticated.</p>
                <p>You can't go into this page if you are not authenticated.</p>
                <p>You can't go into this page if you are not authenticated.</p>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
        </div>
    );
};
export default WithStudentLayout(Dashboard);
