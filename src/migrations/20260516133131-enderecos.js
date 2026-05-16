'use strict';

const CreatedAndUpdated = require('../models/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'alunos',
          key: 'id'
        }
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      uf: {
        type: Sequelize.CHAR(2),
        allowNull: false
      },
      street: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      ...CreatedAndUpdated
    })
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
