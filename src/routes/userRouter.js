const { reguster, getProfile, setSetings } = require('../controllers/userController');

const router = require('express').Router()

router.post('/register',reguster)

router.get('/profile',getProfile)

router.patch('/settings',setSetings)

module.exports = router;
