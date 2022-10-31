var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

/* Receive GET request to create a new post */
router.get('/post/create', function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/post/create', function(req, res, next) {
  res.json('respond with a resource');
});
module.exports = router;
