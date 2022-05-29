//const express = require("express");
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./routes/users.js";
import posts from "./routes/posts.js"
dotenv.config(); // to be able to access .env file 
const app = express();
// app.get("/", (req,res)=>{
//   res.send("welcome to homepage");
// })

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log(" connected to mongoDB 😎 ");
})
.catch((err)=>{
    console.log(" we have an  error",err);
  
});
app.use(express.json()); // to send post data 
app.use("/users" , users);
app.use("/posts" , posts);


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
});




