"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Enderecos", {
      fields: ["usuarioId"],
      type: "foreign key",
      name: "usuarioEnderecoFk",
      references: {
        table: "Usuarios",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Enderecos", "usuarioEnderecoFk");
  },
};
