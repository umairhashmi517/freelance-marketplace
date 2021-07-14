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
  bidder: String,
  proposal: String,
  amount:Number,
  noOfDays:Number,
  acceptance:{
    type:Boolean,
    default:false
  }
})
let Bid = new mongoose.model('bid',webSchema)
module.exports = Bid