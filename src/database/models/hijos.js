const { DataTypes } = require("sequelize");

module.exports = (DataTypes, sequelize) => {
    let alias = "hijos"
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
          }

}

const hijos = (alias, cols, config)

hijos.associate = function (modelos) {
    hijos.belongsTo(modelos.padres_hijos, {
        as: "padres",
        foreignKey: "hijoId",
        otherKey:"padreId",
    })

}


    return hijos

}
