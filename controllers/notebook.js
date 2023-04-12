var notebook = require('../models/notebook');
// List of all Costumes
exports.notebook_list = function(req, res) {
res.send('NOT IMPLEMENTED: notebook list');
};
// for a specific Costume.
exports.notebook_detail = function(req, res) {
res.send('NOT IMPLEMENTED: notebook detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.notebook_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Notebook create POST');
};
// Handle Costume delete form on DELETE.
exports.notebook_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Notebook delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.notebook_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Notebook update PUT' + req.params.id);
};

// List of all Costumes
exports.notebook_list = async function(req, res) {
    try{
    theNotebook = await notebook.find();
    res.send(theNotebook);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.notebook_view_all_Page = async function(req, res) {
try{
theNotebook = await notebook.find();
res.render('notebook', { title: 'Notebook Search Results', results: theNotebook });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Costume create on POST.
exports.notebook_create_post = async function(req, res) {
console.log(req.body)
let document = new notebook();
document.noteBookName = req.body.noteBookName;
document.noteBookPages = req.body.noteBookPages;
document.noteBookCost = req.body.noteBookCost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
    