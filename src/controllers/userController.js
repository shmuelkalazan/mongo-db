const { reguster, getProfile, setSetings } = require('../routes/userRouter');

const router = require('express').Router()

router.post('/register',reguster)

router.get('/profile',getProfile)

router.patch('/settings',setSetings)

module.exports = router;