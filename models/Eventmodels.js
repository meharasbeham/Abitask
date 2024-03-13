const mongoose=require("mongoose");

const EventSchema=mongoose.Schema({
    EventhallName:{
        type:String,
            require:true,

    },
    
    Eventtotlerooms:{
        type:String,
            require:true,

    },
    EventRoomsfacility:{
        type:String,
            require:true,

    },
    Eventonhourroomrent:{
        type:String,
        default:true,
    },
    EventRoomNumber:{
        type:String,
        default:true,
    },
    IsActive:{
        type:Boolean,
        default:false,
    }
    
});

module.exports=mongoose.model("Events",EventSchema);