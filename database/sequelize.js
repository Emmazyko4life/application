const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql10759420', 'MtZiZr7RpP', 'sql10759420', {
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
  });

  module.exports = sequelize