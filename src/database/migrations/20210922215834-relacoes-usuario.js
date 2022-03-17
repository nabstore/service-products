"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Usuarios", {
      fields: ["tipoUsuarioId"],
      type: "foreign key",
      name: "tipoUsuarioFk",
      references: {
        table: "TipoUsuarios",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Usuarios", "tipoUsuarioFk");
  },
};
