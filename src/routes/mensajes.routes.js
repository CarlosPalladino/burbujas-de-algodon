    const Router = require('express')
    const router = Router()
    const {created,lista,deelete} = require('../controllers/mensajesController')

    router.post('/create',created);
    router.get('/lista', lista);
    router.delete('/eliminar',[],deelete)

    module.exports = router
