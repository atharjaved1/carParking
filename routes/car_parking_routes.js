var express = require('express');
router = express.Router()
const carparkingUser_controller = require('../controllers/user_controller')
const carparkingBooked_controller = require('../controllers/slot_controller')

router.post('/carParkUserSave',carparkingUser_controller.carParkingUser_saveData)
router.get('/bookedData',carparkingBooked_controller.carparkingBooked_Slot)



module.exports =router