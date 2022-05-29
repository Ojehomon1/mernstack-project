import mongoose from "mongoose";

// create schema 
const userSchema = mongoose.Schema({
    username : {type : String, required:true},
    email : {type : String, required:true},
    password : {type : String, required:true}
});

export default mongoose.model("user",userSchema);