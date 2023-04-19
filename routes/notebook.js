var express = require('express');
var router = express.Router();

/* GET Notebook details */
const Notebook_controlers = require('../controllers/notebook');
router.get('/',Notebook_controlers.notebook_view_all_Page);
module.exports = router;
/* GET detail costume page */
router.get('/detail', Notebook_controlers.notebook_view_one_Page);

/* GET create costume page */
router.get('/create', Notebook_controlers.notebook_create_Page);

/* GET create update page */
router.get('/update', Notebook_controlers.notebook_update_Page);

/* GET delete costume page */
router.get('/delete', Notebook_controlers.notebook_delete_Page);
