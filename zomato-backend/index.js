const express = require('express');
const sequelize = require('./config/dbConnect');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Sync database and start server
sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server started on port ${process.env.PORT || 8080}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

