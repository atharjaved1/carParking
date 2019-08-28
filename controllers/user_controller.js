const carparkingUser_model = require('../models/user_model')


const carParkingUser_saveData = (req,res)=>{

    let newparking = new carparkingUser_model()
    
    newparking.name = req.body.name
    newparking.email = req.body.email
    newparking.password = req.body.password

    newparking.save((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json({
                message:"signedup successfully",
                result
            })
        }

    })
}
module.exports =  {
    carParkingUser_saveData
}


// const login = (req, res, next) =>{
//     var email = req.body.email;
//     var password = req.body.password;
//     console.log(email, password);
//     parkingSchema.find({email:email, password:password}, (err, result)=>{
         
//         if(err){
//             res.send("Record not match! Please try again");
//         } 
//         res.status(200).json({
//             message: "Successfully Login",
//             result
//         })
//     })


// };
