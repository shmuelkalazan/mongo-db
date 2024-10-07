const { login, logout } = require('../controllers/authController');
const router = require('express').Router()

router.post('/login',login)

router.delete('/logout',logout)

module.exports = router;