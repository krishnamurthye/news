const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const News = sequelize.define('News', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } }
});

module.exports = News;

