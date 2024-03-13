const {GETALLROOMDATA, CREATENEWEROOMDATA}=require("../Router/Roomdatarouter");

const RoomdataRouter=require("express").Router();

 RoomdataRouter.get("/",GETALLROOMDATA);
 RoomdataRouter.post("/create",CREATENEWEROOMDATA);
    

 
module.exports=RoomdataRouter; 
 
 