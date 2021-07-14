let express = require('express');
let router = new express.Router();
let auth = require('../middleware/auth');
let userController = require('../controllers/user.controller');

//Get view page for register
router.get("/", (req, res) => {  res.render("user/register")  });

//Create registration
router.post("/",userController.register);

//Get view page for login
router.get("/login", (req, res) => {  res.render("user/login")  });

//Get view page for main menu
router.get("/main",auth.ensureAuthenticatedAdmin,(req, res) => {   res.render("user/main",{user:req.user})  });

//Authenticate user and session creation
router.post("/login", auth.login);  

//Will show selected user details
router.get("/:id",auth.ensureAuthenticatedAdmin,userController.show);

module.exports = router;