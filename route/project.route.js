const express = require('express')
const router = new express.Router();
const auth = require('../middleware/auth')
const project = require('../controllers/project.controllers')

//display all projects
router.get("/all",auth.ensureAuthenticatedAdmin,project.display);

//display user projects
router.get("/my",auth.ensureAuthenticatedAdmin,project.my);

//Get view page for project post
router.get("/", auth.ensureAuthenticatedAdmin, project.skills);

//Create project
router.post("/", auth.ensureAuthenticatedAdmin, project.create);

module.exports = router;