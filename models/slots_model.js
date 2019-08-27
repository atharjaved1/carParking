// var mongoose = require('mongoose')
// const slotSchema = mongoose.Schema({
//  userId:{
//     type:mongoose.Schema.ObjectId,
//     ref:'parkingSchema'

//   },
//   reservationId:{
//     type:mongoose.Schema.ObjectId,
//     ref:'reservationSchema'
//   }


// })
// slotSchema.index({userId:1,reservationId:1},{unique:true})

// module.exports=mongoose.model('slotSchema',slotSchema)


var mongoose = require('mongoose')
const SlotBookedSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'carparkingUserModelschema'
    },
    datebooked:{
        type:String
        // default:Date.now
    }

})

SlotBookedSchema.index({userId:1,datebooked:1},{unique:true})

module.exports = mongoose.model('SlotBookedSchema',SlotBookedSchema)