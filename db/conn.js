const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/freelanc_web",{  useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection established ..."))
.catch((err) =>console.log(err));
