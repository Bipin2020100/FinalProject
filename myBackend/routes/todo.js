var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res) {
    console.log(req.body);
    req.db
        .collection("auth")
        .updateOne(
            { email: req.body.email },
            { $push: { todo: req.body.todo } }
        )
        .then((resp) => {
            res.json({ statusCode: 200, result: "Post successful" });
        });
});

//Delete the todo
router.put("/", function (req, res) {
    console.log("req.body");
    req.db
        .collection("auth")
        .updateOne(
            { email: req.body.email },
            { $pull: { todo: req.body.todo } }
        )
        .then((resp) => {
            res.json({ statusCode: 200, result: "Post successful" });
        });
});

//Edit the todo

// router
//     .put("/", function (req, res) {
//         req.db
//             .collection("auth")
//             .updateOne(
//                 { email: req.body.email },
//                 { $pull: { todo: req.body.todo } }
//             );
//     })
//     .then((resp) => {
//         res.json({ statusCode: 200, result: "Post successful" });
//     });

module.exports = router;
