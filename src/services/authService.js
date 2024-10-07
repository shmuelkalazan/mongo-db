const bcrypt = require("bcrypt")
const { UserModel } = require("../models/userModel")
const jwt  = require('jsonwebtoken')

const login = async (user) => {
    try {
        const dbUser  = await UserModel.find({user_name:user.user_name})
        if (!dbUser) throw new Error("user not fuond")

        if (!await bcrypt.compare(user.password ,dbUser.password))    
            throw new Error("wrong password")
        const token = await jwt.sign({user_name:dbUser.user_name ,role:dbUser.role},
            process.env.TKEN_SECERT ,{
                expiresIn:"3m"
            });
    return token        
    } catch (err) {
        console.log(err)
        throw new Error("...")
    }
}

module.exports = {
    login
}