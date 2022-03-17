"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario);
      this.hasMany(models.Compra);
    }
  }
  Endereco.init(
    {
      usuarioId: DataTypes.INTEGER,
      logradouro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      cep: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Endereco",
    }
  );
  return Endereco;
};
