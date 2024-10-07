const { login: loginFromService } = require("../services/authService");

const login = async (req ,res) => {
    try {
        const token = await loginFromService(req.body)
        res.cookie('token' ,token)
        res.json({
            msg:"nice to see you " + req.body.user_name
        })
    } catch (error) {
        res.status(400).send(err.message)
    }
}

const logout = async (req ,res) => {
    try {
        res.clearCookie('token')
        res.sendStatus(500)
    } catch (error) {
        
    }
}


module.exports = {
    login,
    logout
}