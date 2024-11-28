import express from 'express'
import cookieParser from 'cookie-parser';
import { router as PostRouter } from './Routes/product.routers.js';
import {router as TechnologyRouter} from './Routes/technologyNew-router.js'
import {router as PoliticalRouter} from './Routes/politicalNews.router.js'
import {router as GeneralRouter} from './Routes/GeneralNews.router.js'
import {router as FullArticleRouter} from './Routes/OpenArticle.router.js'
import {router as userRouter} from './Routes/User.router.js'
import {router as checkAuthRouter} from './Routes/CheckAuth.routes.js'
import dbConnect from './DatabaseConnection/dbConnect.js'
// import fs from 'fs'
// import path from 'path'
import cors from 'cors'

const server = express();
 
// const privateKey = fs.readFileSync(path.resolve('./private.key'), 'utf8');
// const publicKey = fs.readFileSync(path.resolve('./public.key'), 'utf8');


server.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend's URL
    credentials: true, // Allow cookies and credentials
  })
);
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({extended : true}));
server.use("/", PostRouter);
server.use("/technology", TechnologyRouter );
server.use("/political", PoliticalRouter );
server.use("/general", GeneralRouter);
server.use("/article", FullArticleRouter);
server.use("/user", userRouter);
server.use("/auth", checkAuthRouter);

dbConnect();

server.listen(3000, () => {
  console.log(" the server is started ")
})