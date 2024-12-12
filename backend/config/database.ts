import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('projet_k8s', 'root', 'root', {
    host: 'mysql',
    dialect: 'mysql',
});

export default sequelize;
