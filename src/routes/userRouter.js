const { register, getProfile, setSetings } = require('../controllers/userController');

const router = require('express').Router()

router.post('/register',register)

router.get('/profile',getProfile)

router.patch('/settings',setSetings)

module.exports = router;
