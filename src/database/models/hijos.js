
module.exports = (sequelize, DataTypes) => {
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
  let config = {
    tableName: "hijos",
    timestamps: false,
    deleteAt: false

  }

  const hijos = sequelize.define(alias, cols, config)

  hijos.associate = function (models) {
    hijos.belongsToMany(models.padres, {
      as: "padres",
      foreignKey: "hijoId",
      otherKey: "padreId",
      through: "padreshijos",
      timestamps: false

    })

  },
  hijos.associate = function (models) {
    
  }


  return hijos

}
