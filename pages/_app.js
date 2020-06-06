import App from "next/app";
import { UserProvider } from "../components/UserContext";
// import { AuthProvider } from "../components/AuthContext";
import "pure-react-carousel/dist/react-carousel.es.css";
import axios from "axios";
import nextCookies from "next-cookies";
import { useState } from "react";

const myApp = ({ Component, pageProps, currentUser, currentUserData }) => {
    const [user, setUser] = useState(currentUser);
    const [userData, setUserData] = useState(currentUserData);
    return (
        // <AuthProvider>
        <UserProvider>
            <Component {...pageProps} user={user} userData={userData} />
        </UserProvider>
        // </AuthProvider>
    );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
myApp.getInitialProps = async (appContext) => {
    const { ctx } = appContext;
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    // only run on server-side, user should be auth'd if on client-side
    if (typeof window === "undefined") {
        const { user } = nextCookies(ctx);

        // if a token was found, try to do SSA
        if (user) {
            try {
                console.log("trying to verify cookie");
                const headers = {
                    "Content-Type": "application/json",
                    Authorization: JSON.stringify({ token: user }),
                };
                const result = await axios
                    .get("/api/validateUser", {
                        headers,
                        baseURL: "http://localhost:3000",
                    })
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        console.log("error");
                    });
                return { ...result, ...appProps };
            } catch (e) {
                // let exceptions fail silently
                // could be invalid token, just let client-side deal with that
            }
        }
    }
    return { ...appProps };
};

export default myApp;
