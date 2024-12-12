import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

interface FollowedTopicAttributes {
    follow_id: number;
    user_id: number;
    topic_name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class FollowedTopic extends Model<FollowedTopicAttributes> implements FollowedTopicAttributes {
    public follow_id!: number;
    public user_id!: number;
    public topic_name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

FollowedTopic.init(
    {
        follow_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            },
            allowNull: false
        },
        topic_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        modelName: 'FollowedTopic',
        tableName: 'followed_topics',
        timestamps: false
    }
);

export default FollowedTopic;
