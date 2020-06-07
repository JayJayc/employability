import React, { useState } from "react";
import router from "next/router";
import Cookie from "js-cookie";
import CoachHeader from "./headers/CoachHeader";
import styles from "../../styling/Coach.module.css";
import { auth } from "../../src/firebase";
const tokenName = "user";

const WithCoachLayout = (Page) => {
    const pageWithLayout = (props) => {
        console.log(props);
        const [status, setStatus] = useState("LOADING");
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                console.log("signedIn");

                setStatus("SIGNED_IN");
            } else {
                console.log("remove token");
                Cookie.remove(tokenName);
                if (typeof window !== "undefined") {
                    window.location.href = "/";
                }
            }
        });
        if (status == "LOADING") {
            return <h1>Loading ......</h1>;
        } else if (status == "SIGNED_IN") {
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
        }
    };
    if (Page.getInitialProps) {
        pageWithLayout.getInitialProps = Page.getInitialProps;
    }
    return pageWithLayout;
};

export default WithCoachLayout;
