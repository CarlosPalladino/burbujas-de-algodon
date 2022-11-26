const { mensaje } = require('../database/models/index')
const db = require('../database/models')
const mensajes = {
    list: async (req, res) => {
        try {
            let mensajesdb = await mensaje.findAll({ include: { all: true } })
            return res.status(200).json(mensajesdb)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    },
    findOne: async (req, res) => {
        try {
            let mensajesdb = await mensaje.findByPk(rq.params.id)
            return res.status(200).json(mensajesdb)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    },
    created: async (req, res) => {
     await mensaje.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            mensajes: req.body.mensajes
        })
    },
    deelete: async (req, res) => {
        await mensaje.delete({ where: req.params.id })
    }
}
module.exports = mensajes