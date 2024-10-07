const { login, logout } = require('../controllers/authController');
const { onlySoldiersAndCommanders } = require('../middlewares/authMiddlewares');
const router = require('express').Router()

router.post('/login',login)

router.delete('/logout',onlySoldiersAndCommanders,logout)

module.exports = router;