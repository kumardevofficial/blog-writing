import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName :{
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String,
    required : true,
    minlength : [8, "minimum length should be 8 character"],
    // maxlength : [100, "password should not be moe than 20 character"],
    // match : [/^[a-zA-Z0-9]+$/ , "only alphanumeric password"]
  }
})

const User = mongoose.model("User",userSchema);
export {User}