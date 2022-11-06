
module.exports = (DataTypes, Sequelize) => {
let alias = Hijos
let cols= {
    id:{

    },
    nombre:{

    },
    apellido:{

    },
    turnoId: {

    },
    sala:{
        
    }

}


    const Hijos = sequelize.define(alias, cols, config)
    return Hijos
}