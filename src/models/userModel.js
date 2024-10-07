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
        tupe:String,
        enum:['soldier','commander'],
        required:[true,"please provaide a role"]
    }
})

const UserModel = mongoose.model('user',userSchema)

module.exports = {
    UserModel
}