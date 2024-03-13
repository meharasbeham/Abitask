
const {GETALLUSER, CREATENEWUSER}=require("../Router/Usersrouter");
const UsersRouter=require("express").Router();

UsersRouter.get("/",GETALLUSER);
UsersRouter.post("/create",CREATENEWUSER);
    

 
module.exports=UsersRouter; 
 
 

