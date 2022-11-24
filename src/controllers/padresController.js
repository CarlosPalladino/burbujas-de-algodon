const { padres } = require('../database/models/index')
const { hijos } = require('../database/models/index')


const db = require('../database/models')
const tutores = {

    list: async (req, res) => {
        try {
            let padresdb = await padres.findAll(
                { include: { all: true } })
                let padres = await padresdb.map(padres=> {
                    id= padres.id,
                    nombre= padres.nombre,
                    apellido= padres.apellido,
                    email= padres.email
                })
                let hijos = await hijosdb.map(hijos=> {
                    id= hijos.id,
                    nombre= hijos.nombre,
                    apellido= hijos.apellido
                })

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
        console.log(req.body)
        let padresdb = await padres.create({
            nombre: req.body.nombre[0],
            apellido: req.body.apellido[0],
            email: req.body.email,
            telefono: req.body.telefono,
        })
        let hijosdb = await hijos.create({
            nombre: req.body.nombre[1],
            apellido: req.body.apellido[1],
            turno: req.body.turno,
        })
        await padresdb.addHijos(hijosdb)

    },

    delete: async (req, res) => {

        await padres.delete({ where: req.params.id })
    }

}


module.exports = tutores