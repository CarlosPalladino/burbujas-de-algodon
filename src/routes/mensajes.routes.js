    const Router = require('express')
    const router = Router()
    const {created} = require('../controllers/mensajesController')

    router.post('/create',created)

    module.exports = router
