const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect');
const Restaurant = require('./restaurant');
const User = require('./user');

const Review = sequelize.define('Review', {
    review: { type: DataTypes.TEXT },
    rating: { type: DataTypes.FLOAT },
    restaurant_id: { type: DataTypes.INTEGER, references: { model: Restaurant, key: 'id' }},
    user_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' }}
});

module.exports = Review;
