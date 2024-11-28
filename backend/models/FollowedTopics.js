const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const FollowedTopic = sequelize.define('FollowedTopic', {
    follow_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'user_id'
        },
        allowNull: false
    },
    topic_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    },
}, {
    timestamps: false,
    tableName: 'followed_topics'
});

module.exports = FollowedTopic;
