const { padres } = require('../database/models/index')
const { hijos } = require('../database/models/index')
const {hashSync} = require('bcrypt');


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
    let padresdb= await padres.create({ // cambiar a req.body
            nombre:req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            password: hashSync(req.body.password,10),
        })
    let hijosdb=await hijos.create({
            nombre: "andrea",
            apellido: "gimenez",
            turno:"mañana"
        })
        await padresdb.addHijos(hijosdb)

    },

    delete: async (req, res) => {

        await padres.delete({ where: req.params.id })
    }
    
}


module.exports = tutores