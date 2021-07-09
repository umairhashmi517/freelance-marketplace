/*

variables and objects should be camelcase
but other than that you can use dash - as seperator

*/
const express = require("express")
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const session = require('express-session');
mongoose.connect("mongodb://localhost:27017/availweb",{  useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection established ..."))
.catch((err) =>console.log(err));

app.use(express.static(path.join(__dirname,'static')))

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

// below const variable is camelCase 

app.set("view engine","hbs")
app.use(express.json());
app.use(express.urlencoded());
app.use(session({ secret:"lllooovvveee"}))

const studentSchema = new mongoose.Schema({
     name: {
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     }
     //for saving data
    const items = new Items(obj)
    const db = await items.save()
     //for saving nested data 
     const dat =await Items.findOneAndUpdate({:},{ $push: {:}})

     //for reading nested documents 
     const dat =await Items.findOne({notes:{$elemMatch:{"date":"2 september 2023"}}})
     
     // for update nested document
     const dat = await Items.updateOne({"notes.date" : "2 september 2023"},{$set: { "notes.$.note_text":"umair mnt" }})  
     
     // for deleting nested document
     const dat = await Items.update({},{ $pull: { notes:{ date:"2 september 2023"}} })
 })
 const Student = new mongoose.model('Students',studentSchema)
 
module.exports = Student
<script>
       function search(data){
         $.ajax({
           url:"/link",
           data:{text:data},
           method:"post",
           contentType : "application/x-www-form-urlencoded",
           success:function(res){
             var domchunk = $('#js')
             domchunk.html('') 
             console.log(res)
             res.name.forEach(function(name){
               domchunk.append('<ul><li>'+name._id+'</li></ul>')
             })
           },error :function(err){
             console.log(err)
           }
         })
       }