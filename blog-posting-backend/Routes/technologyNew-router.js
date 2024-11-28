import express, { Router } from 'express';
import {showTechnologNews} from '../Controllers/Post.controller.js'
const router = Router();

router.get("/technology-news", showTechnologNews)

export {router}
