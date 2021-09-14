'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entregas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Entregas.init({
    nomeCliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dataEntrega: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pontoPartida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pontoDestino: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Entregas',
  });
  return Entregas;
};