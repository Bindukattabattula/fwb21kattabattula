var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tiger', { title: 'Search Results by Tiger' });
});

module.exports = router;
