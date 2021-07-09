const mongoose = require("mongoose");
const webSchema = new mongoose.Schema(
    [ String ]
)  
let Skills = new mongoose.model('skills',webSchema)
module.exports = Skills