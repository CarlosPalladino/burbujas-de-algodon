module.exports = (DataTypes, sequelize) => {
    let alias = "Padres_hijos"
    let cols = {
        id: {
            allowNull : false,
            DataTypes: DataTypes.TEXT,
            primareKey: true,
        },
        padreId: {
            allowNull : false,
            DataTypes: DataTypes.TEXT,
        },
        hijoId:{
            allowNull : false,
            DataTypes: DataTypes.TEXT,
        }


    }
    const Padres_hijos = sequelize.define(alias, cols, config)
    return Padres_hijos
}