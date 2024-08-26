const { DataTypes } = require('sequelize');
const sequelize = require('../dbConnect');

const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING }
});

module.exports = User;
