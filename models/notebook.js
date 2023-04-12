const mongoose = require("mongoose")
const notebookSchema = mongoose.Schema({
    noteBookName: String,
    noteBookPages: String,
    noteBookCost: String
})
module.exports = mongoose.model("notebook",
notebookSchema)