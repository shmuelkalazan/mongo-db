const { createUser } = require("../services/userService")

const register = async (req ,res) => {
    try {
        await createUser(req.body)
        res.status(201).json({
            msg:"user created"
        })
    } catch (err) {
        res.status(400).json(err)

    }
}

const getProfile = async (req ,res) => {
    try {
        
    } catch (error) {
        
    }
}

const setSetings = async (req ,res) => {
    try {
        
    } catch (error) {
        
    }
}
module.exports = {
    register,
    getProfile,
    setSetings
}