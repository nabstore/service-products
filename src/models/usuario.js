"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.TipoUsuario);
      this.hasMany(models.Endereco);
      this.hasMany(models.Compra);
      this.hasMany(models.Cartao);
    }
  }
  Usuario.init(
    {
      tipoUsuarioId: DataTypes.INTEGER,
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
