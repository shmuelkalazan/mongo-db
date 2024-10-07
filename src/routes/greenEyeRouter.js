const { createPoll, reply, getNotifications, getPollById, deletePoll } = require('../controllers/greenEyeController')

const router = require('express').Router()

router.post('/',createPoll)

router.get('/my',getNotifications)

router.get('/:id',getPollById)

router.post('/reply',reply)

router.delete('/:id',deletePoll)

module.exports = router;