'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("CompraItems", {
      fields: ["compraId"],
      type: "foreign key",
      name: "compraCompraItemFk",
      references: {
        table: "Compras",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });

    await queryInterface.addConstraint("CompraItems", {
      fields: ["produtoId"],
      type: "foreign key",
      name: "produtoCompraItemFk",
      references: {
        table: "Produtos",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("CompraItems", "compraCompraItemFk");
    await queryInterface.removeConstraint("CompraItems", "produtoCompraItemFk");
  }
};
