module.exports = (sequelize, DataTypes) => {
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
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.BIGINT
        }

    }
    let config = {
        tableName: "padres",
        timestamps: false,
        deleteAt: false

    }

    const padres = sequelize.define(alias, cols, config)
    padres.associate = function (modelos) {
        padres.belongsToMany(modelos.hijos, {
            as: "hijos",
            through: "padres-hijos",
            foreignKey: "padreId",
            otherKey: "hijoId"
        })

    }
    return padres

}
