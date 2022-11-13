// const { padres } = require('../database/models')
const db = require('../database/models')
const tutores = {
    list:(req, res)=>{
        db.padres
            .findAll(
                { include: [{association:"hijos"}]}
            )
            .then()(padres => {
                return res.json(padres)
            })},
    created: async (req, res) => {
        await padres.create({
            nombre: "andrea",
            apellido: "gimenez",
            email: "andrea@gmail.com",
            telefono: 1144566,
            password: "11123"
        })
    }
}
module.exports = tutores