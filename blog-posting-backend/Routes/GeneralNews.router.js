import express, { Router } from 'express';
import {showGeneralNews} from '../Controllers/Post.controller.js'
const router = Router();

router.get("/general-news", showGeneralNews)

export {router};