
const Repeatcustomermodel=require("../models/Repeatcustomermodels");

function GETALLREPEATCUSTOMER(req,res,next){
    Repeatcustomermodel.find()
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

async function CREATENEWREPEATCUSTOMER(req,res,next){
const newRepeatcustomer= await Repeatcustomermodel.create(req.body);
console.log(newRepeatcustomer);

    return res.status(200).json({
        message:'successful creating events'
    });
}
module.exports={
    GETALLREPEATCUSTOMER,
    CREATENEWREPEATCUSTOMER,
};