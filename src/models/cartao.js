'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario);
      this.hasMany(models.Compra);
    }
  };
  Cartao.init({
    usuarioId: DataTypes.INTEGER,
    number: DataTypes.STRING,
    apelido: DataTypes.STRING,
    validade: DataTypes.STRING,
    cvv: DataTypes.STRING,
    titular: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cartao',
  });
  return Cartao;
};