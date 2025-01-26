const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('application', 'root', 'emm@zyko4190', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize