
module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('turnos', {
        id: {
          allowNull: false,
          DataTypes: DataTypes.TEXT,
          primareKey: true
        },
        maniana: {
          allowNull: true,

        },
        tarde: {
          allowNull: true,

        }
      });
    }

    catch (e) {
      console.log(e);

    }
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('turnos');

  }
};
