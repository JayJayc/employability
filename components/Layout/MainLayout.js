import MainHeader from "./headers/MainHeader";

const WithMainLayout = (Page, pageName) => {
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
};

export default WithMainLayout;
