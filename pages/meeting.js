import React from "react";
import Header from "../components/Layout/Header";
import withAuth from "../src/helpers/withAuth";
import WithLayout from "../components/Layout/MainLayout";
import dynamic from "next/dynamic";
import styles from "./../styling/Meeting.module.css";

let ZoomMtg = null;

const Meeting = (props) => {
    const handleMeetingStart = () => {
        // if (process.browser) {
        //     console.log("here");
        //     // Components
        //     ZoomMtg = require("@zoomus/websdk").ZoomMtg;
        //     ZoomMtg.preLoadWasm();
        //     ZoomMtg.prepareJssdk();
        //     ZoomMtg.init({
        //         debug: true, //optional
        //         leaveUrl: "http://localhost:3000/meeting", //required
        //         success: (res) => {
        //             console.log(res);
        //             console.log("hi");
        //             ZoomMtg.join({
        //                 signature:
        //                     "ZGN5dGlKMHR6MDIzSUtWampFRkFFZEd4NU1ta1d0RmtWdUVYLnVuZGVmaW5lZC4xNTkwNzY0OTA4NDE1LnVuZGVmaW5lZC51cVpKSkxDY2lkc1FDNnlBcmcydDBkT3BQZ21HMk92ME1rMldEN3o5Q1ZFPQ==",
        //                 meetingNumber: "75351216035",
        //                 apiKey: "FwejT9XVT5OeI5IaY40mbw",
        //                 userName: "Jay Chen",
        //                 userEmail: "fakemail2339@gmail.com",
        //                 passWord: "0nVpdV",
        //                 success: (success) => {
        //                     console.log(success);
        //                 },
        //                 error: (error) => {
        //                     console.log(error);
        //                 },
        //             });
        //             console.log("bye");
        //         },
        //         error: (error) => {
        //             console.log(error);
        //         },
        //     });
        // }
    };
    return (
        <div>
            <div onClick={handleMeetingStart}>Start</div>
            <div className={styles.zoomContainer}>
                {/* <div
                    id="zmmtg-root"
                    style={{
                        width: "100px",
                        height: "100px",
                        position: "initial",
                    }}
                >
                    <div data-reactroot="" class="meeting-app"></div>
                </div> */}
                <iframe
                    src="https://zoom.us/wc/78680589428/join?prefer=0&un=myUser&pwd=0zixZg"
                    sandbox="allow-forms allow-scripts allow-same-origin"
                    allow="microphone; camera; fullscreen"
                ></iframe>
            </div>
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
        </div>
    );
};

export default withAuth(WithLayout(Meeting));
