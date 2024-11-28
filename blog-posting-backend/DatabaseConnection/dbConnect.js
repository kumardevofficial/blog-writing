import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/blogwebsite";

const dbConnect = async (req, res) => {
  try{
    await mongoose.connect(URL);
    console.log(" Db connected successfully");
  } catch (err){
    console.log("unable to connect Db", err);
  }
}

export default dbConnect;



