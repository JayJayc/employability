import styles from "./../../../styling/Student.module.css";
import React, { useEffect, useState } from "react";

const JourneyBar = (props) => {
    console.log("her1");

    const {
        children,
        stepPositions = [],
        unfilledBackground = null,
        filledBackground = null,
        text = null,
    } = props;

    return (
        <div
            className={styles.RSPBprogressBar}
            style={{ background: unfilledBackground }}
        >
            {/* Here we're looping over the children to clone them and add them custom props */}
            {React.Children.map(children, (step, index) => {
                const width =
                    stepPositions.length > 0
                        ? stepPositions[index]
                        : getStepPosition(
                              React.Children.count(children),
                              index
                          );
                let style = {
                    width: `${width}%`,
                    background: `red`,
                };
                return (
                    <span className={styles.stepWrapper} style={style}>
                        {React.cloneElement(step, {
                            index,
                        })}
                    </span>
                );
            })}

            {text ? (
                <div className={styles.RSPBprogressBarText}>{text}</div>
            ) : null}

            {/* <div
                className={styles.RSPBprogression}
                style={{
                    background: filledBackground,
                    width: `${safePercent}%`,
                }}
            /> */}
        </div>
    );
};

//  percent: number
function getSafePercent(percent) {
    if (percent > 100 || percent < 0 || typeof percent !== "number") {
        console.warn(
            `[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: ${percent}).`
        );
    }
    return Math.min(100, Math.max(percent, 0));
}
//   steps: number, stepIndex: number, hasStepZero: boolean
function getStepPosition(steps) {
    return 100 / steps;
}

export default JourneyBar;
