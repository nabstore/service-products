'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        id: 1,
        tipoUsuarioId: 2,
        nome: 'root',
        email: 'root@gmail.com',
        senha: '$2b$10$SBG62L4FB5XvHxHmWjqhl.d/J.mkepDeqvQVZcbq/wBiSC1zYs/oi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
