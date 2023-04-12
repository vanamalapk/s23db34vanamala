var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var notebook_controller = require('../controllers/notebook');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/notebook', notebook_controller.notebook_create_post);
// DELETE request to delete Costume.
router.delete('/notebook/:id', notebook_controller.notebook_delete);
// PUT request to update Costume.
router.put('/notebook/:id', notebook_controller.notebook_update_put);
// GET request for one Costume.
router.get('/notebook/:id', notebook_controller.notebook_detail);
// GET request for list of all Costume items.
router.get('/notebook', notebook_controller.notebook_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"notebook", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
