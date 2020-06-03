import MainHeader from "./headers/MainHeader";
import withAuth from "../../src/helpers/withAuth";

const WithMainLayout = (Page, pageName) => {
    const PageWithAuth = withAuth(() => {
        return () => (
            <div>
                <style jsx global>{`
                    body {
                        background-color: rgb(246, 248, 253);
                        margin: 0px;
                        font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif";
                    }
                `}</style>

                <MainHeader page={pageName} />
                <Page />
            </div>
        );
    });
    return () => <PageWithAuth />;
};

export default WithMainLayout;
