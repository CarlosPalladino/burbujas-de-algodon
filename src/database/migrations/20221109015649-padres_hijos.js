
module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('padres-hijos', {
        id: {
          allowNull: false,
          DataTypes: DataTypes.TEXT,
          primareKey: true
        },
        padreId: {
          allowNull: false,
          DataTypes: DataTypes.TEXT,
        },
        hijoId: {
          allowNull: false,
          DataTypes: DataTypes.TEXT,
        }
      })}
   catch (err) {
        console.log(err)
      }
    },

  async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('padres-hijos');
    }
  };
