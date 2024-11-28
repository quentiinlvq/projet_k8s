const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const DataSource = require('./DataSource');

const Article = sequelize.define('Article', {
    article_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    source_id: {
        type: DataTypes.INTEGER,
        references: {
            model: DataSource,
            key: 'source_id'
        },
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    publish_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tags: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    }
}, {
    timestamps: false,
    tableName: 'articles'
});

module.exports = Article;
