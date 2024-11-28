// import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';
import { User } from "../Model/User.Schema.js";
import fs from 'fs'
import path from 'path'
import bcrypt from "bcrypt"

const createUser = async (req, res) => {

  const privateKey = fs.readFileSync(path.resolve('./private.key'), 'utf8');
  console.log(privateKey);
  const reqtData = req.body;
  const {confirmPassword, ...newData} = reqtData;
  const {fullName , email, password} = newData;
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(password, saltRound)

  // console.log(fullName + email + password + hashedPassword);
  const user = new User({
    fullName,
    email,
    password : hashedPassword
  });
   try{
      
      const savedUser = await user.save();
      console.log(savedUser);
      const token = jwt.sign(
        { userId: savedUser._id, email: savedUser.email },
        privateKey,
        { algorithm: 'RS256', expiresIn: '1h' }  
      );
      res.cookie('token', token, {
        httpOnly: true, // Prevent access by JavaScript
        secure: false, // Send cookie only over HTTPS
        maxAge: 3600000, // 1 hour
        sameSite: 'lax' // this is for cross site
      });
      res.status(200).json({"message" : "user created successfully"});
  } catch(err) {
    console.error(err); 
    res.status(500).json({"message" : " unable to create user", "err" : err});
  }

}

const loginUser = async (req, res) => {
  const privateKey = fs.readFileSync(path.resolve('./private.key'), 'utf8');
  const { email, password } = req.body;
  
  try{
    const isUserExist = await User.findOne({email});
    if(!isUserExist){
      return res.status(404).json({"message" : " no user exsisted assosiated with this email"});
    }
    const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password);
    if(!isPasswordCorrect){
      return res.status(401).json({"message" : "password not matched"});
    }
    const token = jwt.sign(
      { userId: isUserExist._id, email: isUserExist.email },
      privateKey,
      { algorithm: 'RS256', expiresIn: '1h' }  
    );
    res.cookie('token', token, {
      httpOnly: true, // Prevent access by JavaScript
      secure: false, // Send cookie only over HTTPS
      maxAge: 3600000, // 1 hour
      sameSite: 'lax' // this is for cross site
    });
    return res.status(200).json({authenticated : true});
  } catch(err){
    return res.status(500).json({"message" : "unable to process the request"});
  }
}

export {createUser, loginUser}