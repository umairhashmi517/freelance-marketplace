const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const ejs = require('ejs')
const session = require('express-session')
require('./db/conn')
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

app.use("/",require('./route'))

app.listen(8000, (err) => { 
    console.log("running");
})