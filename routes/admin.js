const {Router} = require('express');
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const jwt = require('jsonwebtoken');
// bcrypt , zod 
const {JWT_ADMIN_PASSWORD} = require("../config")
const {adminMiddleware} = require("../middleware/admin");
adminRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName} = req.body; 

    // add the zod validation
    // TODO : hash the password so plaintext pw is not stored in the DB

    try{
            // why it is awaited 
            // => because userModel.create returns a password and the reason of returning the
            // promise is because the DB is far away 
        await adminModel.create({
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


adminRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;

    // TODO: ideally password should be hashed, and hence you cannot compare the user provided password and the database password


    const admin = await adminModel.findOne({
        email:email,
        password:password
    });
    // userModel.find -> would return an empty array if you enter wrong creds and if(empty array ) = true; 

    if(admin){
        const token = jwt.sign({
            id:user._id
          },JWT_ADMIN_PASSWORD);

        // or do the cookie logic 

        res.json({

        });
    res.json({
        message:"signup done"
    });
    
}
});




adminRouter.put("/course",adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title, description, imageUrl , price , courseId } = req.body;

    const course = await courseModel.updateOne({
        _id:courseId,
        creatorId : adminId
    },{

        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:creatorId
    });

    res.json({
        message:"Course updated"
    });
});

adminRouter.post("/course", adminMiddleware,async function(req,res){

    const adminId = req.userId;
    // req.userId is coming from adminMiddleware

    const {title,description,imageUrl, price ,creatorId}  = req.body;

    const course = await courseModel.create({

        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:creatorId
    });


    res.json({
        message:"preview done"
    });
});


adminRouter.get("/bulk",adminMiddleware,async function(req,res){

    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId:adminId
    });

    res.json({
        message:"preview done"
    });
});



module.exports = ({
    adminRouter:adminRouter
});