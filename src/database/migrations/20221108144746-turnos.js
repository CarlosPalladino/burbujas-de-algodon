'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 try {
  await queryInterface.createTable('turnos', { 
      id: Sequelize.INTEGER,
      maniana :{
        allowNull: false,
        
      }
   });
 }

     catch (e) {
      console.log(e);
     
  }
},
  
  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('turnos');
     
  }
};
