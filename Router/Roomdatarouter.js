
const Roomdatamodel=require("../models/Roomdatamodels");

function GETALLROOMDATA(req,res,next){
    Roomdatamodel.find()
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
                message:"Datas fetched successfully",
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

async function CREATENEWEROOMDATA(req,res,next){
const newRoomdata= await Roomdatamodel.create(req.body);
console.log(newRoomdata);

    return res.status(200).json({
        message:'successful creating Datas'
    });
}
module.exports={
    GETALLROOMDATA,
    CREATENEWEROOMDATA,
};