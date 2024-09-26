const express = require("express");
const Router = express.Router;
const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require("../config")


const userRouter = Router();

const {userModel} = require("../db");

userRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName} = req.body; 

    // add the zod validation
    // TODO : hash the password so plaintext pw is not stored in the DB

    try{
            // why it is awaited 
            // => because userModel.create returns a password and the reason of returning the
            // promise is because the DB is far away 
        await userModel.create({
            email:email,
            password:password,
            firstName : firstName,
            lastName : lastName
        });
    }catch(e){
        res.json({
            e
        });

    }




    res.json({
        message:"signup done"
    });
});


userRouter.post("/signin",async function(req,res){

    const {email,password} = req.body;

    // TODO: ideally password should be hashed, and hence you cannot compare the user provided password and the database password


    const user = await userModel.findOne({
        email:email,
        password:password
    });
    // userModel.find -> would return an empty array if you enter wrong creds and if(empty array ) = true; 

    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);

        // or do the cookie logic 

        res.json({

        });
    }
    res.json({
        message:"signin done"
    });
});


userRouter.get("/purchases",function(req,res){
    res.json({
        message:"signup done"
    });
});

module.exports = {
    userRouter : userRouter
}