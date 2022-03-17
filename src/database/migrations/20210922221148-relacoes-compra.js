'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Compras", {
      fields: ["usuarioId"],
      type: "foreign key",
      name: "usuarioCompraFk",
      references: {
        table: "Usuarios",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    await queryInterface.addConstraint("Compras", {
      fields: ["enderecoId"],
      type: "foreign key",
      name: "enderecoCompraFk",
      references: {
        table: "Enderecos",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Compras", "usuarioCompraFk");
    await queryInterface.removeConstraint("Compras", "enderecoCompraFk");
  }
};
