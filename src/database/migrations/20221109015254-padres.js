module.exports = {
  async up (queryInterface, DataTypes) {
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
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.TEXT
      },
     
    
      telefono: {
        type: DataTypes.TEXT
      }
    })
  }
   catch(e){
    console.log(e)
   }

},

  async down (queryInterface, Sequelize) {
 
     await queryInterface.dropTable('users');
  }
};
