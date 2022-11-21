const { hijos } = require('../../database/models')
const db = require('../../database/models')
const alumnos = {
    list: (req, res) => {
        db.hijos
            .findAll(
                { include: { all: true } }

            )
            .then()(hijos => {
                return res.json(hijos)
            })
    },
    created: async (req, res) => {
        await hijos.create({
            nombre: "franco",
            apellido: "gimenez",
            turno: "maniana"
        })

    },
    findOne: async (req, res) => {
        try {
            let hijosdb = await hijos.findByPk(rq.params.id)
            return res.status(200).json(hijosdb)
        }
        catch (error) {
            return res.status(500).json(error)

        }
    },
    edit: async (req, res) => {
        try {
            await hijos.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                turno: req.body.turno

            })
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    delete: async (req, res) => {

        await hijos.delete({ where: req.params.id })
    },
    add: async (req, res) => {

        let hijosdb = await hijosdb

    }
}



module.exports = alumnos