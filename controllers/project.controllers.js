const validater = require('validator')
const User = require('../model/User')
const Project = require('../model/Project')
module.exports.skills = async (req, res) => {
 // res.send("working")
  res.render("project",{id:req.user.id})
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
    const projects = new Project(project) 
    const dat = await projects.save()

    res.send("<h1>Your project will be posted soon</h1>")
} 
//Display all the projects
module.exports.display = async(req,res) => { 
  const projects = await Project.find()
  res.render("browse",{projects:projects}) 
}
module.exports.my = async(req,res) => { 
  let id = req.user._id
  const projects = await Project.find({userId:id})
  console.log(projects);

  res.render("my-projects",{projects:projects}) 
}