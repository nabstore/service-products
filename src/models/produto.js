"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Produto.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 40],
            msg: "Nome deve ter entre 3 e 40 letras.",
          },
        },
      },
      descricao: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      estoque: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Produto",
    }
  );
  return Produto;
};
