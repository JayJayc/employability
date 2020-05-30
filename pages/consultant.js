import React from "react";
import Header from "../components/Layout/Header";
import withAuth from "../src/helpers/withAuth";
import WithLayout from "../components/Layout/MainLayout";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>You can't go into this page if you are not authenticated.</p>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
            <div>
                <h1>Dashboard Page</h1>
                <p>You can't go into this page if you are not authenticated.</p>
            </div>
        </div>
    );
};
export default withAuth(WithLayout(Dashboard));
