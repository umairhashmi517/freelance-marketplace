const validater = require('validator')
const User = require('../model/User')
const Project = require('../model/Project')
module.exports.skills = (req, res) => {
 // res.send("working")
  console.log(req.user)
  let user = req.user
  res.render("project/create",{user:user})
}
module.exports.create = async (req, res) => {
    //assigning variables for validation
    let project = {}
    project.name = req.body.name
    project.description = req.body.description
    project.starting = req.body.starting 
    project.ending = req.body.ending
    project.skills = req.body.skills
    project.userId = req.body.id

    let errors = []
    
    if(validater.isEmpty(project.name)||validater.isEmpty(project.description)||validater.isEmpty(project.starting)||validater.isEmpty(project.ending)||validater.isEmpty(project.skills)){
        let message = "Name,description,starting,ending amount and skills is required" 
        errors.push(message)
    }
    if(!validater.isByteLength(project.name, { min: 15 }) && !validater.isByteLength(project.description, { min: 15 })){
       errors.push("Project name and description should not less than 15 characters") 
    }
    if(errors.length)  res.render('project',{errors:errors})
    
    project.userId = req.user.id
    //after validated we will save our data in database
    try{
      const projects = new Project(project) 
      await projects.save()
    }
    catch(e){
      console.log(e)
    }
    res.send("<h1>Your project will be posted soon</h1> ")
} 
//Display all the projects
module.exports.display = async (req,res) => {
  console.log(req.user);
  try{
    let projects = await Project.find({userId: { $ne: req.user._id } });
    console.log(projects);
    
  res.render("project/display",{projects:projects})
  }
  catch(e){
    console.log(e)
  }
}
module.exports.my = async(req,res) => { 
  try{
    const projects = await Project.find({userId:req.user._id})
    
  res.render("project/my",{projects:projects}) 
  }
  catch(e){
    console.log(e)
  }
}