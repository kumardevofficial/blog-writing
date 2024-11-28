import fs from 'fs'
import jwt from 'jsonwebtoken'
import path from 'path'

const publicKey = fs.readFileSync(path.resolve('./public.key'), 'utf8');
const checkCreatePostAuth = (req, res) => {
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({authenticated : false});
  }

  try{
    jwt.verify(token, publicKey, {algorithms : ['RS256']}, (err, decode) => {
      if(err){
        return res.status(401).json({authenticated : false})

      }
      return res.status(200).json({authenticated : true, user : decode});
      
    })
  } catch(error) {
    return res.status(500).json({authenticated : false});
  }
}

export {checkCreatePostAuth}