import express from 'express';
import cookieParser from 'cookie-parser';
import { router as PostRouter } from './Routes/product.routers.js';
import { router as TechnologyRouter } from './Routes/technologyNew-router.js';
import { router as PoliticalRouter } from './Routes/politicalNews.router.js';
import { router as GeneralRouter } from './Routes/GeneralNews.router.js';
import { router as FullArticleRouter } from './Routes/OpenArticle.router.js';
import { router as userRouter } from './Routes/User.router.js';
import { router as checkAuthRouter } from './Routes/CheckAuth.routes.js';
import dbConnect from './DatabaseConnection/dbConnect.js';
import cors from 'cors';
import { createServer } from '@vercel/node';

const server = express();

// CORS configuration
server.use(
  cors({
    origin: 'https://blog-writing-iota.vercel.app/', // Your frontend's URL
    credentials: true, // Allow cookies and credentials
  })
);

// Middleware
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Define routes
server.use("/", PostRouter);
server.use("/technology", TechnologyRouter);
server.use("/political", PoliticalRouter);
server.use("/general", GeneralRouter);
server.use("/article", FullArticleRouter);
server.use("/user", userRouter);
server.use("/auth", checkAuthRouter);

// Connect to database (make sure it's optimized for serverless)
dbConnect();

// Export app for serverless function
export default (req, res) => {
  server(req, res);  
};
