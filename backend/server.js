const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'projet_k8s',
});

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully');
}).catch(err => {
    console.error('Unable to sync the database:', err);
});
