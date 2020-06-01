import CoachHeader from "./headers/CoachHeader";
import withAuth from "../../src/helpers/withAuth";
import styles from "../../styling/Coach.module.css";

const WithCoachLayout = (Page, pageName) => {
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
                <CoachHeader page={pageName} />
                <div className={styles.pageWrapper}>
                    <div className={styles.pageWrapperInner}>
                        <div className={styles.pageLayoutWrapper}>
                            <Page />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    });
    return () => <PageWithAuth />;
};

export default WithCoachLayout;
