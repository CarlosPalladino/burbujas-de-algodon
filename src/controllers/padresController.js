const { padres } = require('../database/models/index')
const db = require('../database/models')
const tutores = {

    list: async (req, res) => {
        try {
            let padresdb = await padres.findAll(
                { include: { all: true } })
            return res.status(200).json(padresdb)
        }
        catch (error) {
            return res.status(500).json(error)

        }

    },
    findOne: async (req, res) => {
        try {
            let padresdb = await padres.findByPk(rq.params.id)
            return res.status(200).json(padresdb)
        }
        catch (error) {
            return res.status(500).json(error)

        }
    },

    created: async (req, res) => {
        await padres.create({
            nombre: "andrea",
            apellido: "gimenez",
            email: "andrea@gmail.com",
            telefono: 1144566,
            password: "11123"
        })
    },

    edit: async (req, res) => {
        try {
            await padres.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                // email: req.body.email,
                // telefono: req.body.telefono,
                // password: req.body.password
            })
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    delete: async (req, res) => {

        await padres.delete({ where: req.params.id })
    },
    add: async (req, res) => {

        let padresdb = await padresdb

    }
}


module.exports = tutores