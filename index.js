const express=require("express");
const http=express();
const cors=require("cors");
const bodyparser=require("body-parser");
const {connectToDatabase}=require('./database/data');
const PORT=1000;

connectToDatabase();
http.use(cors()),
http.use(express.json()),
http.use(bodyparser.json()),
http.set("view engine","ejs");

http.use('/api/Events',require("./countroloers/Event.countroler"));
http.use('/api/users',require("./countroloers/User.countroler"));
http.use('/api/roomdata',require("./countroloers/Roomdata.countroler"));
http.use('/api/customerdata',require("./countroloers/Customerdata"));
http.use('/api/repeatcustomerdata',require("./countroloers/Repeatcustomer"));

http.get('/',(req,res)=>{
    return res.status(200).json({
        message:"requst successfully",
    })




});

    
http.listen (PORT,()=>{
    console.log("starting...");
});