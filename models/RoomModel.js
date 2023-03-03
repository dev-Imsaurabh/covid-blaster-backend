const mongoose = require("mongoose")




let roomSchema = mongoose.Schema({

    p1:String,
    p2:String,
    p3:String,
    p4:String,
    rid:{type:Number,required:true}


},{
    versionKey:false
})


let RoomModel = mongoose.model("room",roomSchema)

module.exports={
    RoomModel
}