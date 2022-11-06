
module.exports = (DataTypes, Sequelize) => {
    let alias = "Turnos"
    let cols = {
        id: {
            allowNull: false,

        },
        tarde: {
            allowNull: false,

        },
        mañana: {
            id: {
                allowNull: false,
            }
        }
    }
    const Turnos = sequelize.define(alias, cols, config)
    return Turnos
}