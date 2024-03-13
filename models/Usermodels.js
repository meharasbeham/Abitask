const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({

Usercustemername:{
    type:String,
    require:true,
},
UserBookingdate:{
    type:String,
   require:true, 
},
UserStarttime:{
    type:String,
   require:true, 
},
UserEndtime:{
    type:String,
   require:true, 
},
UserRoomnumber:{
    type:String,
   require:true, 
},

IsActive:{
    type:Boolean,
    default:false,
    require:true, 
}

});

module.exports=mongoose.model("users",UserSchema);
