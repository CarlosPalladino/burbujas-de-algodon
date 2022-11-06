module.exports = (sequelize, DataTypes) => {
    let alias = "Padres"
    let cols = {
        id: {
            allowNull: false,
            type: DataTypes.autoIncrement,
            primaryKey: true
        },

        nombre: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        apellido: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        email: {
            allowNull: false,
            type: DataTypes.TEXT,
            unique: true

        },
        comentario: {
            allowNull: true,
            type: DataTypes.TEXT,


        },
        telefono: {
            allowNull: true,
            type: DataTypes.TEXT

        }


    }
    let config = {
        tableName: "Padres",
        timeTamps: false
    }



    const Padres = sequelize.define(alias, cols, config)
    return Padres
}

