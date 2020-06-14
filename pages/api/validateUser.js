import * as admin from "firebase-admin";
let app;
if (!admin.apps.length) {
    app = admin.initializeApp();
} else {
    app = admin.app();
}
const auth = app.auth();
const firestore = app.firestore();

const validate = async (token) => {
    let decodedToken;
    try {
        decodedToken = await auth.verifyIdToken(token, true);
    } catch (err) {
        return res.status(401).send({
            message: err,
        });
    }
    console.log("Valid token.");
    // get user data from your DB store
    const data = (
        await firestore.doc(`/users/${decodedToken.uid}`).get()
    ).data();
    console.log(data, "here");
    const user = await auth.getUser(decodedToken.uid);
    const result = {
        currentUser: {
            uid: user.uid,
            email: user.email,
        },
        currentUserData: data,
    };
    return result;
};

export default async (req, res) => {
    console.log("Validating token...");
    try {
        const { token } = JSON.parse(req.headers.authorization || "{}");
        if (!token) {
            return res.status(403).send({
                errorCode: 403,
                message: "Auth token missing.",
            });
        }
        const result = await validate(token);
        return res.status(200).send(result);
    } catch (err) {
        return res.status(err.code).send({
            errorCode: err.code,
            message: err.message,
        });
    }
};
