var mongoose = require('mongoose')
const SlotBookedSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'carparkingUserModelschema'
    },
    datebooked:{
        type:String 
    }

})

SlotBookedSchema.index({userId:1,datebooked:1},{unique:true})

module.exports = mongoose.model('SlotBookedSchema',SlotBookedSchema)