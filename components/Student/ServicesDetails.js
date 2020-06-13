import React, { useState, useEffect } from "react";
const ServicesDetail = (props) => {
    const { sliderIndex } = props;
    const [title, setTitle] = useState("");
    console.log(sliderIndex);
    useEffect(() => {
        switch (sliderIndex) {
            // Case 0 Insights Service
            case 0:
                setTitle("Insights Services");
                break;

            // Case 1 Resume Service
            case 1:
                setTitle("Resume Services");
                break;

            // Case 2 Cover Letter Service
            case 2:
                setTitle("Cover Letter Services");
                break;

            // Case 3 Mock Interview Service
            case 3:
                setTitle("Mock Interview Services");
                break;

            // Case 4 LinkedIn Services
            case 4:
                setTitle("LinkedIn Services");
                break;

            // Case 5 Advising Service
            case 5:
                setTitle("Advising Services");
                break;
            default:
        }
    }, [sliderIndex]);

    return (
        <div>
            <h1>{title}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
export default ServicesDetail;
