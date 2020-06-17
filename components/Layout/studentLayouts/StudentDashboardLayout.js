import React, { useState } from "react";
import StudentSideMenu from "../../Student/StudentSideMenu";
import styles from "../../../styling/Student.module.css";
import WithStudentLayout from "./StudentLayout";
const studentDashboardLayout = (Page) => {
    const withStudentDashboardLayout = (props) => {
        return (
            <React.Fragment>
                <div className={styles.pageWrapper}>
                    <StudentSideMenu />
                    <div className={styles.pageWrapperInner}>
                        <div className={styles.pageLayoutWrapper}>
                            <Page />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
    if (Page.getInitialProps) {
        withStudentDashboardLayout.getInitialProps = Page.getInitialProps;
    }
    return WithStudentLayout(withStudentDashboardLayout);
};

export default studentDashboardLayout;
