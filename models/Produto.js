// models/Produto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição do modelo Produto
const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EAN: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CEST: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PESO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VALIDADE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DUN: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EMBALAGEM: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CLASSIFICACAO_FISCAL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DIMENSOES_EMB: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CAIXA_EMBARQUE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  QUANT_POR_CAIXA: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CAIXA_POR_PALLET: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});

module.exports = Produto;
