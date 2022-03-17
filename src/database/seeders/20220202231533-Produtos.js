'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Produtos', [
      {
        id: 1,
        nome: 'Tapete de Ovo',
        descricao: 'Tapete em formato de ovo para deixar seu banheiro ainda mais lindo.',
        preco: 85,
        estoque: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nome: 'Funko Pop! Geralt - The Wither',
        descricao: 'Funko Pop! do maior bruxão de Rívia, Geralt.',
        preco: 190,
        estoque: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nome: 'Box de Percy Jackson e os Olimpianos',
        descricao: 'Box de uma das maiores obras de Rick Riordan e a última aventura de Percy Jackson.',
        preco: 120,
        estoque: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nome: 'Boneco Power Rangers Rosa',
        descricao: 'Boneco da maior Power Ranger que nós temos.',
        preco: 80,
        estoque: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        nome: 'Kit de Vôlei',
        descricao: 'Um kit com tudo que você precisa para uma boa partida de vôlei: rede, mochila sacola e bola.',
        preco: 160,
        estoque: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        nome: 'Adesivos Nerd Sticker Web',
        descricao: 'Conjunto de adesivos Geek para notebook da Nerd Sticker.',
        preco: 175,
        estoque: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        nome: 'Cadeira Gamer',
        descricao: 'Tá com dor na costa por passar o dia sentado no home office? Aqui a solução! Cadeira gamer ergonômica LINDA.',
        preco: 1399,
        estoque: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        nome: 'Edredom Geek',
        descricao: 'Quer personalizar sua caminha? Se liga nesse edredom massa!',
        preco: 89,
        estoque: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
