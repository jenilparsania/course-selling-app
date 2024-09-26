const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const app = express();
require('dotenv').config();
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
//  we do this for versioning 



app.use(express.json());





async function main(){
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(3000);
    console.log("listening on the port 3000");
    
}

//  the main function is created so that , if we are not able to connect to the DB, 
// it would not start the server. 

main();