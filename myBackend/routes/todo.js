var express = require("express");
var router = express.Router();
 

/* GET users listing. */
router.post("/", function (req, res) {
  
    console.log(req.body)
    req.db.collection('auth').updateOne({email:req.body.email},{$push:{'todo':req.body.todo}})
    .then((resp) => {
              res.json({ statusCode: 200, result: "Post successful" });
          });
});

module.exports = router;
