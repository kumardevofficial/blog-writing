import {Post} from '../Model/Post.Schema.js'


const createPost = async (req, res) => {
  
  const postData = req.body;
  const post = new Post(postData);
  try{
    post.save();
    res.status(200).json({"message" : "user created successfully"});
  } catch (err) {
    res.status(500).json({"message":"internal server error", "err" : err});
  }
}

const showallList = async (req, res) => {
   res.json({message : " Server is started"});
}

const showTechnologNews = async (req, res) => {
  try{
    const techNews = await Post.find({postCategory : "technology"})
    res.json(techNews);
  } catch(err) {
    res.status(500).json({"message": "internal server error" , "err" : err});
  }
}

const showPoliticalNews = async (req, res) => {
  try{
    const politicalnews = await Post.find({postCategory : "politics"})
    res.json(politicalnews);
  } catch(err) {
    res.status(500).json({"message": "internal server error" , "err" : err});
  }
}

const showGeneralNews = async (req, res) => {
  try{
    const politicalnews = await Post.find({postCategory : "general"})
    res.json(politicalnews);
  } catch(err) {
    res.status(500).json({"message": "internal server error" , "err" : err});
  }
}

const showFullArticle = async (req, res) => {
try{
  const articleId = req.params.id;
  const fullarticle = await Post.findOne({_id : articleId});
  res.json(fullarticle);
} catch(err){
  res.json({"message" : "internal server error" , "err" : err})
}
}


export {createPost , showallList, showTechnologNews, showPoliticalNews, showGeneralNews, showFullArticle}