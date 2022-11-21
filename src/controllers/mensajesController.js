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
                nombre: "andrea",
                apellido: "gimenez",
                email: "andrea@gmail.com",
                mensaje: "hola me gustaria saber la la posibilidad de anotar a mi hijo a la tarde  y mi hija a la mañana. Gracias !"
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