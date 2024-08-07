import axios from "axios";
import { User } from "../models/User.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const secretKey = "1234567890"


export const registerUser = async (req, res, next) =>{
    try {
        const {email, username, password} = req.body;
        if (!email || !username || !password) {
            return res.status(400).json({
                message:"please provide all fields"
            })
        }

        const user_info = await User.findOne({username});

        if (user_info){
            return res.status(400).json({
                message: "user already exists",
            })
        }

        const user = await User.create({email, username, password})

        res.status(201).json({
            message: "user created successfully",
            username: username
        })
    }
    catch (error) {
        if (error.response){
            console.log(error.response.data);
        }
    }
}


export const loginUser = async (req, res, next) =>{
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message:"please provide all fields"
            })
        }

        const user_info = await User.findOne({email});
        

        if (!user_info){
            return res.status(400).json({
                message: "user not found"
            })
        }

        if (user_info.password !== password){
            return res.status(403).json({
                message: "invalid password",
            })
        }

        let token = jwt.sign({email:user_info.email, username: user_info.username}, secretKey, { expiresIn: '1h' }); 
        
        res.status(201).json({
            message: "user validated",
            user_token: token
        })


 
        

    }
    catch (error) {
        res.status(500).json({
            error: "some exception occurred"
        })

    } 
}
