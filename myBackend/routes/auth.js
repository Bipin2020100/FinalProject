var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* Post Login page. */
router.post("/login", function (req, res) {
    req.db
        .collection("auth")
        .findOne({
            userName: req.body.userName,
        })
        .then((data) => {
            if (data && bcrypt.compareSync(req.body.password, data.password)) {
                
                const accessToken = jwt.sign(data, 'secret');
                console.log(accessToken);

                res.json({
                    statusCode: 200,
                    result: "you are logged in",
                    accessToken: accessToken,
                });
            } else {
                res.json({ statusCode: 401, result: "unauthorized user" });
            }
        })
        .catch((err) => {
            res.json({ statusCode: 500, result: "unable to send request" });
        });

    console.log(req.body);

    //     let userData = { username: req.body.userName, password: req.body.password };

    //     if (userData.username === "Bipin" && userData.password === "1234") {
    //         res.json({ statusCode: 200, result: "You are logged in" });
    //     } else {
    //         res.json({ statusCode: 401, result: "Unauthorized user" });
    //     }
});

/* Post signup page. */
router.post("/signup", async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPassword);
    req.db
        .collection("auth")
        .insertOne({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            role: req.body.role,
            age: req.body.age,
            password: hashedPassword,
            todo:[]
        })
        .then((res) => res.json({ statusCode: 200, result: "Post successful" }))
        .catch((err) => {
            res.json({ statusCode: 500, result: "Unable to process request" });
        });
});

module.exports = router;
