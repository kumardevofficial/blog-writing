import { Router } from "express";
import {createUser, loginUser} from "../Controllers/User.controller.js"

const router = Router();
router.post("/singup", createUser).post("/login",  loginUser);

export {router}