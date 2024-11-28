import { Router } from "express";
import {showPoliticalNews} from '../Controllers/Post.controller.js'

const router = Router();
router.get("/political-news", showPoliticalNews);

export {router}