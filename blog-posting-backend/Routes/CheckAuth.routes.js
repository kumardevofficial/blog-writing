import express, { Router } from 'express';
import {checkCreatePostAuth} from '../Controllers/CreatPostAuth.controller.js'
import checkLoginAuth from '../Controllers/CheckLoginAuth.controller.js'
import checkLogout from '../Controllers/checkLougout.controller.js'
const router = Router();

router.get("/create-post", checkCreatePostAuth).get("/login-check", checkLoginAuth).get("/logout", checkLogout)

export {router};