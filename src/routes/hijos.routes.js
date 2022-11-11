const Router = require('express')
const router = Router()
const {created} = require('../controllers/hijosController')

router.post('/hijos',created)

module.exports = router