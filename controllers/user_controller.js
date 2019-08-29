const carparkingUser_model = require('../models/user_model')
// var bcrypt=require("bcrypt-node");

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



const login = (req, res, next) => {
    // fetch user and test password verification
	carparkingUser_model.findOne({ email: req.body.email }, function(err, user) {
		if(err){
			res.status(500).json({
				message: "error",
				err
			})
		}
		else{  
			user.comparePassword(req.body.password, function(err, isMatch) {
				if(err){
					res.status(500).json({
						message: "error",
						err
					})
				}else{
                    if(!isMatch){
                        res.send("Invalid Password. Please try again");
                    }
                    else{
                        res.status(200).json({
                            message: "Login Successfully",
                            isMatch
                        })
                    }
				}
				
			});
		 
			
		}

		
	});
};
 
       
module.exports =  {
    carParkingUser_saveData,
    login
}