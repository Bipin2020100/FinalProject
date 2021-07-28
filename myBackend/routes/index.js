var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", { title: "My Backend: Only for authorized users" });
});

module.exports = router;
