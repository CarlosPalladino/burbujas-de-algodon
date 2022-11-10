const db = require('../database/models/padres')
const padres = {
    list: (req,res) => {
        return res.render
    },
    created:(req,res) => {
        db.padres.create ({
            nombre : "griselda" ,
            apellido : "perez",
            email: "griselda@gmail.com",
            telefono:"114456677"

        })

    }
}
module.exports = padres