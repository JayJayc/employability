import StudentHeader from "./headers/StudentHeader";
import withAuth from "../../src/helpers/withAuth";
import StudentSideMenu from "../Student/StudentSideMenu";
import styles from "../../styling/Student.module.css";
const WithStudentLayout = (Page, pageName) => {
    const PageWithAuth = withAuth(() => {
        return (
            <React.Fragment>
                <style jsx global>{`
                    body {
                        background-color: rgb(246, 248, 253);
                        margin: 0px;
                        font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif";
                    }
                `}</style>
                <StudentHeader page={pageName} />
                <div className={styles.pageWrapper}>
                    <div className={styles.pageWrapperInner}>
                        <div className={styles.pageLayoutWrapper}>
                            <StudentSideMenu />
                            <Page />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    });
    return () => <PageWithAuth />;
};

export default WithStudentLayout;
