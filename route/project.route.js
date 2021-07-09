const express = require('express')
const router = new express.Router();
const auth = require('../middleware/auth')
const project = require('../controllers/project.controllers')

//display all projects
router.get("/all",auth.ensureAuthenticatedAdmin,project.display)

//display user projects
router.get("/my-projects",auth.ensureAuthenticatedAdmin,project.my)

//Get view page for project post
router.get("/project", auth.ensureAuthenticatedAdmin, project.skills)

//Create project
router.post("/project", auth.ensureAuthenticatedAdmin, project.create)

module.exports = router;