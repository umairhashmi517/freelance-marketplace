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
     errors.push("Name,email,mobile number and password is required")
    }
    console.log(validater.isEmail(user.email));
    if(!validater.isEmail(user.email)){ 
     errors.push("Correct format of email is required")
    }
    //console.log(validater.isByteLength(password, { min: 3}));
    if(!validater.isByteLength(user.password, { min: 3 })) errors.push("Password should not less than 3 letters")
    console.log(errors);

    if(errors.length){
      res.render("user/register",{errors:errors})
    }
    else {
     try{
      const users = new User(user)
      await users.save()
    } 
    catch(e){
     console.log(e)
    }
    //console.log(dat)
    res.render('user/main')
    } 
}
module.exports.show = async (req,res) => {
  const id = req.params.id;
  console.log(id);
  try{
    const userData = await User.find({_id:id})
    console.log(userData);
    res.render('user/detail',{data:userData[0]})
  }
  catch(e){
    console.log(e)
  }
}