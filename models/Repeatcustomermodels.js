const  mongoose  = require("mongoose");

const Repeatcustomerschema=mongoose.Schema({
customername:{
    type:String,
    require:true,
},
roomnumber:{
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
    reuire:true,
},
bookingid:{
    type:String,
    reuire:true,   
},
bookingdate:{
    type:String,
    reuire:true,
},
bookingstatus:{
    type:String,
    reuire:true,
}

});

module.exports=mongoose.model("repeatcustomer",Repeatcustomerschema);