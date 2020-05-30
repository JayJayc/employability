import Header from "./Header";

// background-color: #e5dad6;

const WithLayout = (Page, pageName) => {
    return () => (
        <div>
            <style jsx global>{`
                body {
                    margin: 0px;
                    font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif";
                }
            `}</style>

            <Header page={pageName} />
            <Page />
        </div>
    );
};

export default WithLayout;
