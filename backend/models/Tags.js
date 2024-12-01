const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tags = sequelize.define('Tags', {
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'tags'
});

module.exports = Tags;
