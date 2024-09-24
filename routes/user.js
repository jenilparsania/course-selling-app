const express = require("express");
const Router = express.Router;

const userRouter = Router();

const {userModel} = require("../db");

userRouter.post("/signup",function(req,res){
    res.json({
        message:"signup done"
    });
});


userRouter.post("/signin",function(req,res){
    res.json({
        message:"signup done"
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