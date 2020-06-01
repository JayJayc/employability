import React from "react";
import WithStudentLayout from "./../../components/Layout/StudentLayout";

const Dashboard = (props) => {
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
            <h2>Services</h2>
            <ul>
                <li>
                    <h3>Book a Buddy</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <ul>
                        <li>To help discover your passion</li>
                        <li>To help shortlist companies</li>
                        <li>To help create resumes and cover letters</li>
                        <li>To help prepare for interviews</li>
                    </ul>
                </li>
                <li>
                    <h3>Request Industry Buddy</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <ul>
                        <li>To help discover your passion</li>
                        <li>To help shortlist companies</li>
                        <li>To help create resumes and cover letters</li>
                        <li>To help prepare for interviews</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default WithStudentLayout(Dashboard);
