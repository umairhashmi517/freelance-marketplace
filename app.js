const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
let path = require('path')
const http = require('http')
const cookie = require('cookie-parser')
const { text } = require("body-parser");
require('./db/conn')

const project = require('./route/project.route')
const user = require('./route/user.route')
const bid = require('./route/bid.route')

require('./passport')(passport)
app.set("view engine","hbs")
app.use(session({
  secret: "process.env.SESSION_SECRET",
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(express.json());
app.use('/static',express.static('static'));
app.use(express.urlencoded()); 
app.use("/",project);
app.use("/",user);
app.use("/",bid);

app.listen(8000, (err) => { 
    console.log("running");
})