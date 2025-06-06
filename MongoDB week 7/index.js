 const express = require("express");
 const jwt = require("jsonwebtoken");
 const JWT_SECRET = "asdasd123@123";
 const {UserModel,TodoModel} = require("./db");
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ayushji2543:iSFv2T7MjyMLpEUO@cluster0.sd3tpo0.mongodb.net/todo-app-database");
const app = express();
app.use(express.json());


app.post("/signup", async function(req,res){
   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;


   await UserModel.create({
    email:email,
    password:password,
    name:name
   })

   res.json({
    message:"you are logged in "

   })
});

app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = UserModel.findOne({

   
    email:email,
    password:password
 })

 console.log(user);

 if (user) {
    const token = jwt.sign({
        id:user._id

    });
    res.json({
            token:token
    });

 } else {
    res.status(403).json({
        message:"incorrect credentials"
    })

 }
});

app.post("/todo", function(req,res){

});

app.post("/todos", function(req,res){

});

app.listen(3000);