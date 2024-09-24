
const {Router} = require('express');
const courseRouter = Router();
const {courseModel} = require("../db");

courseRouter.post("/purchase",function(req,res){
    //in the real world expect the user to pay you money (razorpay)
    res.json({
        message:"signup done"
    });
});



courseRouter.get("/preview",function(req,res){
    res.json({
        message:"signup done"
    });
});

module.exports={
    courseRouter:courseRouter
}