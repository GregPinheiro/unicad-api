'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Entregas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataEntrega: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pontoPartida: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pontoDestino: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Entregas');
  }
};