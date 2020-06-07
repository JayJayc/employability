import MainHeader from "./headers/MainHeader";
// import checkAuth from "../../src/helpers/checkAuth";
import { auth } from "../../src/firebase";
import Cookie from "js-cookie";
import axios from "axios";
import router from "next/router";

const tokenName = "user";

const WithMainLayout = (Page) => {
    auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
            const token = await authUser.getIdToken();
            console.log(token);
            Cookie.set(tokenName, token, { expires: 1 });
            axios
                .get("/api/user", {
                    params: {
                        email: authUser.email,
                    },
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data.type === "STUDENT") {
                        router.push("/student");
                    } else {
                        router.push("/coach");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("no user");
            Cookie.remove(tokenName);
        }
    });
    const pageWithLayout = (props) => {
        return (
            <div>
                <style jsx global>{`
                    body {
                        background-color: rgb(246, 248, 253);
                        margin: 0px;
                        font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif";
                    }
                `}</style>

                <MainHeader />
                <Page {...props} />
            </div>
        );
    };
    if (Page.getInitialProps) {
        pageWithLayout.getInitialProps = Page.getInitialProps;
    }
    return pageWithLayout;
};

export default WithMainLayout;
