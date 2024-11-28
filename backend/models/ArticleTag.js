const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Article = require('./Article');

const ArticleTag = sequelize.define('ArticleTag', {
    article_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Article,
            key: 'article_id'
        },
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'article_tags'
});

module.exports = ArticleTag;
