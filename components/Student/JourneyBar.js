import JourneyBar from "./JourneyBarComponent";
import Step from "./JourneyBarComponent/Step";
import styles from "./../../styling/Student.module.css";

const JourneyBarComponent = (props) => {
    return (
        <div className={styles.journeyBarWrapper}>
            <JourneyBar filledBackground="linear-gradient(to right,#81A5B1, #628E9D)">
                <Step accomplished={true}>
                    {({ index, transitionState }) => {
                        if (transitionState === "entering") {
                            console.log(transitionState);
                        } else if (transitionState === "exiting") {
                            console.log(transitionState);
                        }
                        return (
                            <div
                                className={[
                                    styles.indexedStep,
                                    styles.skipped,
                                ].join(" ")}
                            >
                                {index + 1}
                            </div>
                        );
                    }}
                </Step>
                <Step accomplished={true}>
                    {({ index, transitionState }) => {
                        if (transitionState === "entering") {
                            console.log(transitionState);
                        } else if (transitionState === "exiting") {
                            console.log(transitionState);
                        }
                        return (
                            <div
                                className={[
                                    styles.indexedStep,
                                    styles.skipped,
                                ].join(" ")}
                            >
                                {index + 1}
                            </div>
                        );
                    }}
                </Step>
                <Step accomplished={true}>
                    {({ index, transitionState }) => {
                        if (transitionState === "entering") {
                            console.log(transitionState);
                        } else if (transitionState === "exiting") {
                            console.log(transitionState);
                        }
                        return (
                            <div
                                className={[
                                    styles.indexedStep,
                                    styles.skipped,
                                ].join(" ")}
                            >
                                {index + 1}
                            </div>
                        );
                    }}
                </Step>
            </JourneyBar>
        </div>
    );
};

export default JourneyBarComponent;
