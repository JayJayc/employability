import React, { useState } from "react";
import WithStudentLayout from "../../../components/Layout/studentLayouts/StudentLayout";
import ServiceSlider from "../../../components/Student/ServiceSlider";
import ServiceDetails from "../../../components/Student/ServicesDetails";
const Dashboard = (props) => {
    const [currentIndex, updateCurrentIndex] = useState(0);
    console.log(currentIndex);
    return (
        <div>
            <h1>Services</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <ServiceSlider
                currentIndex={currentIndex}
                updateCurrentIndex={updateCurrentIndex}
            />
            <ServiceDetails sliderIndex={currentIndex} />
        </div>
    );
};
export default WithStudentLayout(Dashboard);
