import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  postHeading : {
    type : String,
    required : true
  },
  postImgaeUrl : {
    type : String,
    required : true,
  },
  fullArticle : {
    type : String,
    required : true,
  },
  postCategory : {
    type : String,
    required : true
  },
  createdAt: { type: Date, default: Date.now },
})

export const Post = mongoose.model("Post", postSchema);