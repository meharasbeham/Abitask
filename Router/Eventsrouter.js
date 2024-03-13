
const Eventmodel=require("../models/Eventmodels");

function GETALLEVENT(req,res,next){
    Eventmodel.find()
    .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
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

async function CREATENEWEVENT(req,res,next){
const newEvent= await Eventmodel.create(req.body);
console.log(newEvent);

    return res.status(200).json({
        message:'successful creating events'
    });
}
module.exports={
    GETALLEVENT,
    CREATENEWEVENT,
};