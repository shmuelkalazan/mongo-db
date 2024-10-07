const {login:loginFromService} = require('../services/userService')

const login = async (req ,res) => {
    try {
        const token = await loginFromService(req.body)
        res.cookie('token' ,token)
        res.json({
            msg:"nice to see you" +req.body
        })
    } catch (error) {
        res.status(400).send(err.message)
    }
}

const logout = async (req ,res) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    login,
    logout
}