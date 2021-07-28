var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('This page is for EVERYONE- NOT Secured');
});

module.exports = router;
