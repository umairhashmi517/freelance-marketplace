const validater = require('validator')
const Project = require('../model/Project')
const Bid = require('../model/Bid')

module.exports.render = async(req,res) => { 
  let id = req.params.projectId;
  let project = "";
  try{
   project = await Project.find({_id:id});
 }
  catch(e){
  console.log(e)
}
  res.render("bid/create",{data:project[0]}) 
}
module.exports.create = async(req,res) => {
  let errors = []
  let bid = {}
  bid.amount = req.body.amount; 
  bid.proposal = req.body.proposal;
  bid.projectId = req.body.projectId;
  bid.userId = req.user._id;
  bid.noOfDays = req.body.days;
  if(validater.isEmpty(bid.amount)||validater.isEmpty(bid.proposal)||validater.isEmpty(bid.noOfDays)){
    let message = "Bid amount,noOfDays and proposal is required"; 
    errors.push(message);
  }
  if(!validater.isByteLength(bid.proposal, { min: 15 })){
    errors.push("Proposal should not be lesser than 15 letters") 
  }
  if(errors.length){
    res.render("bid/create",{errors:errors})
  }
  bid.bidder = req.user.name
  let bidd
  try{
    bidd = new Bid(bid)
    await bidd.save()
  }
  catch(e){
    console.log(e)
  }
    res.redirect('/user/main')
}
module.exports.display = async(req,res) => {
  let id = req.params.id
  let bids
  try{
    //populating User data for redirecting into user detail page 
    bids = await Bid.find({projectId:id}).populate('userId');
  }
  catch(e){
    console.log(e)
  }
  console.log(bids)
  res.render("bid/on-my-project",{bids:bids})
}
module.exports.accept = async(req,res) => {
  let id = req.params.id
  try{
   await Bid.update({_id:id},{acceptance:true});
   res.send(await Bid.find())
  }
  catch(e){
    console.log(e)
  }
}
