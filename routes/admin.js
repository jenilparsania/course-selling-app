const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");


adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup done"
    });
});


adminRouter.post("/signin",function(req,res){
    res.json({
        message:"signup done"
    });
});
adminRouter.put("/course",function(req,res){
    res.json({
        message:"preview done"
    });
});
adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message:"preview done"
    });
});



module.exports = ({
    adminRouter:adminRouter
})