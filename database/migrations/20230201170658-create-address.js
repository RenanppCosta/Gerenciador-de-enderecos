'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("address",{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      street:{
        type: Sequelize.STRING,
        allowNull: false
      },
      neighborhood:{
        type: Sequelize.STRING,
        allowNull: false
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false
      },
      state:{
        type: Sequelize.STRING,
        allowNull: false
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      complement:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
    {
      tableName: "address",
      underscored: false,
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("address");
  }
};