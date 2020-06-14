// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore();

export default (req, res) => {
    console.log(req.query);
    firestore
        .collection("requests")
        .where("requester", "==", req.query.user)
        .get()
        .then((snapshot) => {
            const requests = [];
            snapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                requests.push(doc.data());
            });
            res.json({ requests });
        })
        .catch((err) => {
            console.log("Error getting documents", err);
        });
};
