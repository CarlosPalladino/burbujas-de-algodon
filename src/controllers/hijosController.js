const {usuarios} = require('../database/models')
const hijos ={
created: async (req,res) =>{
await usuarios.create({
    nombre: "joaquin" ,
    apellido:"perez",
    edad:10
}) 
    
}
}

module.exports = hijos