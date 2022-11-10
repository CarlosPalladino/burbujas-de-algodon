const Router = require('express')
const router = Router
const {created}= require('../controllers/padresController')

router.post('/',created)


module.exports =router