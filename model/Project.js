const mongoose = require("mongoose");
const webSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
    name: String,

    description: String,

    starting: Number,

    ending: Number,

    skills:[ String ]
})  
let Product = new mongoose.model('product',webSchema)
module.exports = Product