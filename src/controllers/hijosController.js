const { hijos } = require('../database/models')
const db = require('../database/models')
const alumnos = {
    list:(req, res)=>{
        db.hijos
            .findAll(
                { include: [{association:"padres"}]}

            )
            .then()(hijos => {
                return res.json(hijos)
            })},
    created: async (req, res) => {
        await hijos.create({
            nombre: "franco",
            apellido: "gimenez",
        })

    }
}

module.exports = alumnos