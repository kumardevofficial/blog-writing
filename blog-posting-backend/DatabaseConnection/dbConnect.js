import mongoose from "mongoose";

const URL = "mongodb+srv://devkumark:thisisme@cluster0.ie8o5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbConnect = async (req, res) => {
  try{
    await mongoose.connect(URL);
    console.log(" Db connected successfully");
  } catch (err){
    console.log("unable to connect Db", err);
  }
}

export default dbConnect;



