const { padres } = require('../database/models/index')
const db = require('../database/models')
const tutores = {

    list: async (req, res) => {
        try {
            let padresdb = await padres.findAll(
            { include: { all: true } } )
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
    addUser async (req, res) => {
        
    }
}
module.exports = tutores