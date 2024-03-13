
const {GETALLEVENT, CREATENEWEVENT}=require("../Router/Eventsrouter");

const EventRouter=require("express").Router();

 EventRouter.get("/",GETALLEVENT);
 EventRouter.post("/create",CREATENEWEVENT);
    

 
module.exports=EventRouter; 
 
 

