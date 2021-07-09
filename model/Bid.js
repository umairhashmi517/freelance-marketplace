const mongoose = require("mongoose");
const webSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "project"
  },  
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user"
  },
  biddername: String,
  proposal: String,
  amount:Number,
  noOfDays:Number
})
let Bid = new mongoose.model('bid',webSchema)
module.exports = Bid