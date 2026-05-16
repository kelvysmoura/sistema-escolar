'use strict';

const CreatedAndUpdated = require('../models/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('turmas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cursos',
          key: 'id'
        }
      },
      colaborador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'colaboradores',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.CHAR(4),
        allowNull: false
      },
      room: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      start_time: Sequelize.TIME,
      end_time: Sequelize.TIME,
      start_date: Sequelize.DATE,
      end_date: Sequelize.DATE,
      ...CreatedAndUpdated
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
