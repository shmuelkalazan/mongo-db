const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:[true,"user name is requird"],
        minlength:[5,"way to sort name ,pleasw enter at last 5 chars"]
    },
    password :{
        type:String,
        required:[true,"password mast be provaided"]
    },
    role:{
        type:String,
        enum:['soldier','commander'],
        required:[true,"please provaide a role"]
    },
    area:{
        type:String,
        enum:['center','north',"south","west","east"],
        required:[true,"please provaide a area"]
    },
    units:{
        type:[Number],
        required:[true,"please specify at last one unit"]
    }
})

const UserModel = mongoose.model('user',userSchema)
module.exports = {
    UserModel,
    userSchema
};