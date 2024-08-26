const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect');

const Restaurant = sequelize.define('Restaurant', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 }
});

module.exports = Restaurant;
