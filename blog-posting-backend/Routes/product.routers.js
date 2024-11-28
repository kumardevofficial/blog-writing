import express, { Router } from 'express';
import { createPost, showallList } from '../Controllers/Post.controller.js';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const router = Router();

// Load public key for JWT verification
const publicKeyPath = fs.readFileSync(path.resolve('./public.key'), 'utf8'); 

const authentication = (req, res, next) => {
  console.log("Authentication started");

  // Get the token from cookies
  const token = req.cookies.token;
  console.log(token);

  // If no token is present, return an authorization error
  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing or invalid' });
  }

  // Verify the token using the public key
  const publicKey = publicKeyPath;
  jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      // Log the error and return a 403 status for an invalid token
      console.error("JWT verification error:", err);
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Log the decoded token for debugging
    console.log("Decoded JWT:", decoded);

    // Attach decoded information (e.g., userId, email) to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  });
};

// Routes
router.get("/", showallList);
router.post("/create-post", authentication, createPost);

export { router };




















// import express, { Router } from 'express';
// import {createPost, showallList} from '../Controllers/Post.controller.js'
// const router = Router();
// import jwt from 'jsonwebtoken';
// import fs from 'fs';
// import path from 'path';


// const publicKeyPath = fs.readFileSync(path.resolve('./public.key'), 'utf8'); 
// const authentication = (req, res, next) => {
//   console.log(" the autthentication started");
//   const token = req.cookies.token;
//   if(!token){
//     return res.status(401).json({ message: 'Authorization token missing or invalid' });
//   }
//   try {
//     const publicKey = publicKeyPath;
//     jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ message: 'Invalid token' });
//       }
//       console.log(decoded);
//       req.user = decoded;
//       next(); 
//     });
//   } catch (err) {
//     console.error('Error verifying token:', err);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };



// router.get("/", showallList);
// router.post("/create-post", authentication , createPost);



// export {router}
