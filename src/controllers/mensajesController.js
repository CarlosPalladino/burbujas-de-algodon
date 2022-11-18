const {mensajes} = require( '../database/models/index')
const mensajes = {

created: async (req, res) => {
try {
    await mensajes.create({
        nombre: "andrea",
        apellido: "gimenez",
        email: "andrea@gmail.com",
        mensaje:"hola me gustaria saber la la posibilidad de anotar a mi hijo a la tarde  y mi hija a la mañana. Gracias !"
    })
} catch (error) {
    
}
},
deelete : async (req, res) => {
    
}

}
module.exports = mensajes 