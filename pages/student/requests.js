import React, { useEffect } from "react";
import WithStudentLayout from "./../../components/Layout/studentLayouts/StudentLayout";
import axios from "axios";
const Dashboard = (props) => {
    useEffect(async () => {
        console.log(props);
        const result = await axios
            .get("/api/requests", {
                baseURL: "http://localhost:3000",
                params: {
                    user: props.user.uid,
                },
            })
            .then(function (response) {})
            .catch(function (error) {
                console.log("error");
            });
    }, []);
    return (
        <div>
            <h1>Profile</h1>
            <h2>Recently Employed Graduates Sharing Their Experience</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};
export default WithStudentLayout(Dashboard);
