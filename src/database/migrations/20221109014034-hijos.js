
module.exports = {
  async up (queryInterface, DataTypes)  {
 try {
   await queryInterface.createTable('users', {
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
  })
}
 catch(e){
  console.log(e)
 }
},
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
