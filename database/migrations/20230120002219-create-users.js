'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("users",{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
        
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  }
};
