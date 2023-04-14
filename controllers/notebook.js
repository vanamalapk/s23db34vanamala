var notebook = require('../models/notebook');
// List of all Costumes
exports.notebook_list = function(req, res) {
res.send('NOT IMPLEMENTED: notebook list');
};
// for a specific Costume.
// exports.notebook_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: notebook detail: ' + req.params.id);
// };
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

// for a specific Drink.
exports.notebook_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await notebook.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    


    // Handle Drink update form on PUT.
exports.notebook_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await notebook.findById( req.params.id)
 if(req.body.checkboxsale) 
   toUpdate.sale = true;
 else 
   toUpdate.same = false;
 // Do updates of properties
 if(req.body.noteBookName)
   toUpdate.noteBookName = req.body.noteBookName;
 if(req.body.noteBookPages) 
   toUpdate.noteBookPages = req.body.noteBookPages;
 if(req.body.noteBookCost) 
   toUpdate.noteBookCost = req.body.noteBookCost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};