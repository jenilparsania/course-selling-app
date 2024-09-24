const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const app = express();
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

// prefixing the routes

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

// app.use("/api/v1/user",userRouter);
// app.use("/api/v1/course",courseRouter);
// app.use("./api/v1/admin",adminRouter);


app.use(express.json());





async function main(){
    await mongoose.connect("mongodb+srv://parsaniajenil:firstdb@cluster0.46eul.mongodb.net/courses");

    app.listen(3000);
    console.log("listening on the port 3000");
    
}

main();