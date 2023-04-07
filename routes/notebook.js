var express = require('express');
var router = express.Router();

/* GET Notebook details */
router.get('/', function(req, res, next) {
  res.render('notebook', { title: 'Search Results of Notebook' });
});

module.exports = router;
