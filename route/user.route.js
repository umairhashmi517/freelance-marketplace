let express = require('express');
let router = new express.Router();
let auth = require('../middleware/auth');
let user = require('../controllers/user.controller');

//Get view page for register
router.get("/", (req, res) => {  res.render("register")  });

//Create registration
router.post("/",user.register);

//Get view page for login
router.get("/login", (req, res) => {  res.render("signin")  });

//Get view page for main menu
router.get("/main",auth.ensureAuthenticatedAdmin,(req, res) => {   res.render("main",{user:req.user})  });

//Authenticate user and session creation
router.post("/login", auth.login);

//Will show selected user details
router.get("/user/:id",auth.ensureAuthenticatedAdmin,user.show);

module.exports = router;