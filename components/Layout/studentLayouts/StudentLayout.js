import React, { useState } from "react";
import Cookie from "js-cookie";
import StudentHeader from "../headers/StudentHeader";
import { auth } from "../../../src/firebase";

const tokenName = "user";

const WithStudentLayout = (Page) => {
    const pageWithLayout = (props) => {
        console.log(props);
        const [status, setStatus] = useState("LOADING");
        auth.onAuthStateChanged(async (authUser) => {
            console.log(authUser);
            if (authUser) {
                const token = await authUser.getIdToken();
                console.log(token);
                Cookie.set(tokenName, token, { expires: 1 });
                const headers = {
                    "Content-Type": "application/json",
                    Authorization: JSON.stringify({ token: token }),
                };
                await axios
                    .get("/api/validateUser", {
                        headers,
                        baseURL: "http://localhost:3000",
                    })
                    .then(function (response) {
                        props.setUser(response.data.currentUser);
                        props.setUserData(response.data.currentUserData);
                    })
                    .catch(function (error) {
                        console.log("error");
                    });
                setStatus("SIGNED_IN");
            } else {
                console.log("remove token");
                await Cookie.remove(tokenName);
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
                    <StudentHeader />
                    <Page {...props} />
                </React.Fragment>
            );
        }
    };
    if (Page.getInitialProps) {
        pageWithLayout.getInitialProps = Page.getInitialProps;
    }
    return pageWithLayout;
};

export default WithStudentLayout;
