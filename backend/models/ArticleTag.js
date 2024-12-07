const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Article = require('./Article');
const Tag = require('./Tags');

const ArticleTag = sequelize.define('ArticleTag', {
    article_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Article,
            key: 'article_id'
        },
        allowNull: false
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Tag,
            key: 'tag_id'
        },
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'article_tags'
});

module.exports = ArticleTag;
