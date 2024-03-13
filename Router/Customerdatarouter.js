
const Customermodel=require("../models/Customermodels");

function GETALLCUSTOMERDATA(req,res,next){
    Customermodel.find()
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

async function CREATENEWCUSTOMERDATA(req,res,next){
const newCustomerdata= await Customermodel.create(req.body);
console.log(newCustomerdata);

    return res.status(200).json({
        message:'successful creating events'
    });
}
module.exports={
    GETALLCUSTOMERDATA,
    CREATENEWCUSTOMERDATA,
};