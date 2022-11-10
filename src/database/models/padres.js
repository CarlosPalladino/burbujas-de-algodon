const { DataTypes } = require("sequelize");

module.exports = (DataTypes, sequelize) => {
    let alias = "padres"
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT
        },
        telefono: {
            type: DataTypes.TEXT
        }

    },
     config = {
        dropTable:"Padres",
        
     }

    const padres = (alias, cols, config)
    padres.associate = function (modelos) {
        padres.belongsTo(modelos.padres_hijos, {
            as: "padreId",
            foreignKey: "padreId"
        })

    }
    return padres

}
