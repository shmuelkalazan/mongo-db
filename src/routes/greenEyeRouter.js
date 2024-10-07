const { createPoll, reply, getNotifications, getPollById, deletePoll } = require('../controllers/greenEyeController')
const { onlyCommanders ,onlySoldiersAndCommanders } = require('../middlewares/authMiddlewares')

const router = require('express').Router()

router.post('/',onlyCommanders,createPoll)

router.get('/my',onlySoldiersAndCommanders,getNotifications)

router.get('/:id',onlyCommanders,getPollById)

router.post('/reply',onlySoldiersAndCommanders,reply)

router.delete('/:id',onlyCommanders,deletePoll)

module.exports = router;