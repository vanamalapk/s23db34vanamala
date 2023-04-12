var express = require('express');
var router = express.Router();

/* GET Notebook details */
const Notebook_controlers = require('../controllers/notebook');
router.get('/',Notebook_controlers.notebook_view_all_Page);
module.exports = router;
