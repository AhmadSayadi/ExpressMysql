const Sequelize = require('sequelize')
'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.TEXT
    },

  }, {freezeTableName: true, tableName: 'user',timestamps: true});
  
  return users;
};