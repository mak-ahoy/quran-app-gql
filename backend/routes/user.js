import express from "express"
import { loginUser, registerUser } from "../controllers/user.js";
import { getSurahVerses, getSurahs } from "../controllers/content.js";

export const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.get('/get-surahs', getSurahs);
userRouter.post('/get-surahs/surah-info', getSurahVerses);


