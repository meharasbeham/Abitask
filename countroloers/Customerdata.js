const {GETALLCUSTOMERDATA,CREATENEWCUSTOMERDATA}=require("../Router/Customerdatarouter");

const CustomerdataRouter=require("express").Router();

 CustomerdataRouter.get("/",GETALLCUSTOMERDATA);
 CustomerdataRouter.post("/create",CREATENEWCUSTOMERDATA);
    

 
module.exports=CustomerdataRouter; 
 
 