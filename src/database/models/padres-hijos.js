const { DataTypes } = require("sequelize");

module.exports = (DataTypes, sequelize) => {
    let alias = "padres_hijos"
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          padreId: {
            type: DataTypes.STRING
          },
          hijoID: {
            type: DataTypes.STRING
          }

}

const padres_hijos = (alias, cols, config)
    return padres_hijos

}
