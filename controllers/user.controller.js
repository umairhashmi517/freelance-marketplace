const validater = require('validator')
const bcrypt = require('bcrypt')
const User = require('../model/User')

module.exports.register = async (req, res) => {
    let errors = []
    let user = {}
    user.name = req.body.name
    user.email = req.body.email
    user.mobile = req.body.mobile
    user.password = req.body.password
    
    if(validater.isEmpty(user.name) || validater.isEmpty(user.email) ||validater.isEmpty(user.mobile) ||validater.isEmpty(user.password)){
     let message = "Name,email,mobile number and password is required" 
     errors.push(message)
    }
    if(!validater.isEmail(user.email)){
     message = "Correct format of email is required" 
     errors.push(message)
    }
    //console.log(validater.isByteLength(password, { min: 3}));
    if(!validater.isByteLength(user.password, { min: 3 })) errors.push("Password should not less than 3 letters")
    console.log(errors);
    if(errors.length){
      res.render("register",{errors:errors})
    } 
    const users = new User(user)
    const dat = await users.save()
    res.render('main')
}
module.exports.show = async (req,res) => {
  const id = req.params.id;
  console.log(id);
  const userData = await User.find({_id:id})
  console.log(userData);
  res.render('user-detail',{data:userData[0]})
}