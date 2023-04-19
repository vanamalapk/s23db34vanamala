var notebook = require('../models/notebook');
// List of all notebooks
exports.notebook_list = function(req, res) {
res.send('NOT IMPLEMENTED: notebook list');
};
// for a specific notebook.
// exports.notebook_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: notebook detail: ' + req.params.id);
// };
// Handle notebook create on POST.
exports.notebook_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Notebook create POST');
};
// Handle notebook delete form on DELETE.
exports.notebook_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Notebook delete DELETE ' + req.params.id);
};
// Handle notebook update form on PUT.
exports.notebook_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Notebook update PUT' + req.params.id);
};

// List of all notebooks
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
// Handle notebook create on POST.
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


// Handle notebook delete on DELETE.
exports.notebook_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await notebook.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };

// Handle a show one view with id specified by query
exports.notebook_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await notebook.findById( req.query.id)
res.render('notebookdetail',
{ title: 'notebook Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for creating a notebook.
// No body, no in path parameter, no query.
// Does not need to be async
exports.notebook_create_Page = function(req, res) {
console.log("create view")
try{
res.render('notebookcreate', { title: 'notebook Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for updating a notebook.
// query provides the id
exports.notebook_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await notebook.findById(req.query.id)
  res.render('notebookupdate', { title: 'notebook Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };


  // Handle a delete one view with id from query
exports.notebook_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await notebook.findById(req.query.id)
  res.render('notebookdelete', { title: 'notebook Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  }