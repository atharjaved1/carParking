const carparkingSlotBooked_model = require('../models/slots_model')

const carparkingBooked_Slot= (req,res)=>{
 

carparkingSlotBooked_model.find({userId:req.body.userId,datebooked:req.body.arrivalDate},(err,result)=>{
 
       if ( result == '' ) {
            let newSlot = new carparkingSlotBooked_model()
            newSlot.userId = req.body.userId
            newSlot.datebooked = req.body.arrivalDate
         
            newSlot.save((err,result)=>{
                if(err){
                    res.send(err);
                    return false;
                    res.status(500).json({
                        message:"some technical error. Please try again."
                    })
                }else{
                    res.status(200).json({
                        message:'Slot has been Confirmed. ',result
                    })
                }
                })

       }else{
           res.json({
               Errorcode : 500, 
               Message: err
           })
       }
        
    })
}



module.exports = {
    carparkingBooked_Slot
}