const { mensajes } = require('../src/database/models/index')
const mensajes = {
    lista: async (req, res) => {
        try {

        } catch (error) {

        }
    },
    created: async (req, res) => {
        try {
            await mensajes.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                mensaje: req.body.mensaje
            })
        } catch (error) {
            console.log(error)
        }
    },
    deelete: async (req, res) => {
        await mensajes.delete({ where: req.params.id })
    }

}
module.exports = mensajes  