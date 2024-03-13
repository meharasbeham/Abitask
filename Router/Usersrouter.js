
const Usermodel=require("../models/Usermodels.js")

function GETALLUSER(req,res,next){
    const{UserRoomnumber,UserBookingdate,UserStarttime,UserEndtime}=req.body;

    Usermodel.find({UserRoomnumber:UserRoomnumber})
    .then ((response)=>{
        if (response.length<1){
            if(response.UserRoomnumber===UserRoomnumber)
            return res.status(402).json({
                success:true,
                data:response,
                message:"No events found",
            });
        
        }else
        
        {
            return res.status(200).json({
                success:true,
                data:response,
                message:"Events fetched successfully",
            });
        }
    })
    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
}

async function CREATENEWUSER(req,res,next){
const newUser= await Usermodel.create(req.body);
console.log(newUser);

    return res.status(200).json({
        message:'successful creating events'
    });
}
module.exports={
    GETALLUSER,
    CREATENEWUSER,
};