import MainHeader from "./headers/MainHeader";
// import checkAuth from "../../src/helpers/checkAuth";
import { auth } from "../../src/firebase";
import Cookie from "js-cookie";
const tokenName = "user";

const WithMainLayout = (Page) => {
    auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
            const token = await authUser.getIdToken();
            console.log(token);
            Cookie.set(tokenName, token, { expires: 1 });
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
