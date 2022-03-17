'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Cartaos", {
      fields: ["usuarioId"],
      type: "foreign key",
      name: "usuarioCartaoFk",
      references: {
        table: "Usuarios",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    await queryInterface.addColumn('Compras', 'cartaoId', {
      type: Sequelize.DataTypes.INTEGER
    });
    await queryInterface.addConstraint("Compras", {
      fields: ["cartaoId"],
      type: "foreign key",
      name: "cartaoCompraFk",
      references: {
        table: "Cartaos",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Cartaos", "usuarioCartaoFk");
    await queryInterface.removeConstraint("Compras", "cartaoCompraFk");
    await queryInterface.removeColumn("Compras", "cartaoId");
  }
};
