const  mongoose  = require("mongoose");

const Roomdataschema=mongoose.Schema({
  roomnumber:{
    type:String,
    require:true,
  },
  
  bookedstatus:{
    type:String,
    require:true,
  },
  customername:{
    type:String,
    require:true,
  },
  date:{
    type:String,
    require:true,
  },
  starttime:{
    type:String,
  require:true,
  },
  endtime:{
    type:String,
    require:true,
  },
  IsActive:{
    type:Boolean,
   default:false,
  },

});

module.exports=mongoose.model("Roomdata",Roomdataschema);