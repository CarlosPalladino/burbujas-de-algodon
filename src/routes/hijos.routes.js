const Router = require('express')
const router = Router()
const {created,list} = require('../controllers/hijosController')

router.get('/hijos',list)
router.post('/create',created)

module.exports=router