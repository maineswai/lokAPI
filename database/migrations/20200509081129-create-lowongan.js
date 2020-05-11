'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lowongans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posisi: {
        type: Sequelize.STRING
      },
      syarat: {
        type: Sequelize.TEXT
      },
      cabang: {
        type: Sequelize.STRING
      },
      gaji: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      perusahaanId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lowongans');
  }
};