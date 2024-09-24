// config/database.js
const { Sequelize } = require('sequelize');

// Configurando a conexão com o PostgreSQL
const sequelize = new Sequelize('catalogo_online', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
