const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('zomato', 'root', 'vYshU2143@', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
