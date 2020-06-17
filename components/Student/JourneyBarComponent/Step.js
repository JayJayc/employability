import styles from "./../../../styling/Student.module.css";
import { Transition } from "react-transition-group";
import { useState } from "react";
const Step = (props) => {
    const {
        accomplished,
        index,
        children,
        transition = "scale",
        transitionDuration = 600,
    } = props;
    const [hover, setHover] = useState(false);
    let style = {
        transitionDuration: `${transitionDuration}ms`,
    };
    return (
        <Transition in={hover} timeout={transitionDuration}>
            {(state) => {
                if (transition) {
                    style = {
                        ...style,
                        ...transitions[transition][state],
                    };
                }

                return (
                    <div
                        className={styles.RSPBstep}
                        style={style}
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {children({
                            accomplished,
                            transitionState: state,
                            index,
                            setHover,
                        })}
                    </div>
                );
            }}
        </Transition>
    );
};

const transitions = {
    scale: {
        entering: { transform: "translateX(-50%) scale(1.5)" },
        entered: { transform: "translateX(-50%) scale(1.5)" },
        exiting: { transform: "translateX(-50%) scale(1)" },
        exited: { transform: "translateX(-50%) scale(1)" },
    },
    rotate: {
        entering: { transform: "translateX(-50%) rotate(360deg)" },
        entered: { transform: "translateX(-50%) rotate(0deg)" },
        exiting: { transform: "translateX(-50%) rotate(0deg)" },
        exited: { transform: "translateX(-50%) rotate(360deg)" },
    },
    skew: {
        entering: { transform: "translateX(-50%) skewX(20deg)" },
        entered: { transform: "translateX(-50%) skewX(0deg)" },
        exiting: { transform: "translateX(-50%) skewX(20deg)" },
        exited: { transform: "translateX(-50%) skewX(0deg)" },
    },
};
export default Step;
