import React, { useEffect, useState } from "react";
import WithStudentLayout from "./../../components/Layout/studentLayouts/StudentLayout";
import axios from "axios";
const Dashboard = (props) => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get("/api/requests", {
                    baseURL: "http://localhost:3000",
                    params: {
                        user: props.user.uid,
                    },
                })
                .then(function (response) {
                    console.log(response.data);
                    setRequests(response.data.requests);
                })
                .catch(function (error) {
                    console.log("error");
                });
        };
        fetchData();
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
            {/* TODO create request cards */}
            {requests.map((request) => {
                return <div>{request.status}</div>;
            })}
        </div>
    );
};
export default WithStudentLayout(Dashboard);
