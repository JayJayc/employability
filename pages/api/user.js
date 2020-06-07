// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore();

export default (req, res) => {
    console.log(req.query);
    firestore
        .collection("users")
        .where("email", "==", req.query.email)
        .limit(1)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                res.statusCode = 200;
                res.json(doc.data());
            });
        })
        .catch((err) => {
            console.log("Error getting documents", err);
        });
};
