const carparkingSlotBooked_model = require('../models/slots_model')

const carparkingBooked_Slot= (req,res)=>{
 
// return;
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
                        message:"erroor"
                    })
                }else{
                    res.status(200).json({
                        message:'Reservation confirmed',result
                    })
                }
                })

       }else{
           res.json({
               code : 500, 
               mesg: err
           })
       }
        
    })
}



module.exports = {
    carparkingBooked_Slot
}