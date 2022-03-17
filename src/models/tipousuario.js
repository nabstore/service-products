"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TipoUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static get COLABORADOR() {
      return 2;
    }

    static get CLIENTE() {
      return 1;
    }

    static associate(models) {
      this.hasMany(models.Usuario);
    }
  }
  TipoUsuario.init(
    {
      rotulo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TipoUsuario",
    }
  );
  return TipoUsuario;
};
