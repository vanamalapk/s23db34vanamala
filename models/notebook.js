const mongoose = require("mongoose")
const notebookSchema = mongoose.Schema({
    noteBookName:{
        type:String,
        required: true,
        match:/^[a-zA-Z]+$/

    },
    noteBookPages: String,
    noteBookCost:{
        type:String,
        required: true,
        match:/^[a-zA-Z]+$/
    },
    
})
module.exports = mongoose.model("notebook",notebookSchema)