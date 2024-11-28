import {Router} from 'express'
import {showFullArticle} from '../Controllers/Post.controller.js'
const router = Router();

router.get("/posts/:id", showFullArticle);

export {router};