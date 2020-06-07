import styles from "./../../styling/LoginModal.module.css";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { auth } from "../../src/firebase";
import router from "next/router";
import axios from "axios";
import cookie from "js-cookie";
const tokenName = "userToken";

const LoginModal = (props) => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [user, setUser] = useContext(UserContext);

    const handleClose = () => {
        props.setShowModal(false);
    };
    const handleChange = (e) => {
        if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "password") {
            setPassword(e.target.value);
        }
    };
    const handleSubmit = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(async (authUser) => {
                // TODO
                // axios
                //     .get("/api/user", {
                //         params: {
                //             email: authUser.user.email,
                //         },
                //     })
                //     .then(function (response) {
                //         setUser(response.data);
                //         console.log(response);
                //         if (response.data.type === "STUDENT") {
                //             router.push("/student");
                //         } else {
                //             router.push("/coach");
                //         }
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
            })
            .catch(function (error) {
                alert(error);
            });
    };
    return (
        <React.Fragment>
            <div id="myModal" className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <span className={styles.close} onClick={handleClose}>
                            &times;
                        </span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className={styles.modalBody}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={handleChange} />
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                        />

                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </div>
                    <div className={styles.modalFooter} onClick={handleSubmit}>
                        <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default LoginModal;
