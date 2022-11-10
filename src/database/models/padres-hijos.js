const { DataTypes } = require("sequelize");


module.exports = (DataTypes, sequelize) => {
    let alias = "padresHijos"
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
          hijoId: {
            type: DataTypes.STRING
          }

}
let config ={
  tableName:"padresHijos",
  timestamps: false,
  deleteAt: false
}

const padresHijos = (alias, cols, config)
    return padresHijos

}
