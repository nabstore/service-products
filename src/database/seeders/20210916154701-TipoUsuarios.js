'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoUsuarios', [
      {
        id: 1,
        rotulo: 'cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        rotulo: 'colaborador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TipoUsuarios', null, {});
  }
};
