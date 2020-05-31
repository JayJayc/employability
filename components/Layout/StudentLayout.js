import StudentHeader from "./headers/StudentHeader";
import withAuth from "../../src/helpers/withAuth";

const WithStudentLayout = (Page, pageName) => {
    const PageWithAuth = withAuth(Page);
    return () => (
        <div>
            <style jsx global>{`
                body {
                    margin: 0px;
                    font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif";
                }
            `}</style>

            <StudentHeader page={pageName} />
            <PageWithAuth />
        </div>
    );
};

export default WithStudentLayout;
