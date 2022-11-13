const Router = require('express')
const router = Router()
const {created,list}= require('../controllers/padresController')

router.get('/padres',list)
router.post('/create',created);



module.exports=router