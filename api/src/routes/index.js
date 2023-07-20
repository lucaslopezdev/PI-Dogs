const {Router} = require('express');
const dogsRouter = require('./dogsRouter')
const tempRouter = require('./tempRouter')
const router = Router()

router.use('/dogs', dogsRouter)
router.use('/temperaments', tempRouter)

module.exports = router;