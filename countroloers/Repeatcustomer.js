
const {GETALLREPEATCUSTOMER, CREATENEWREPEATCUSTOMER}=require("../Router/Repeatcustomerrouter");

const RepeatcustomerRouter=require("express").Router();

 RepeatcustomerRouter.get("/",GETALLREPEATCUSTOMER);
 RepeatcustomerRouter.post("/create",CREATENEWREPEATCUSTOMER);
    

 
module.exports=RepeatcustomerRouter; 
 
 

