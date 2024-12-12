import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
    user_id: number;
    username: string;
    email: string;
    password_hash: string;
    role?: 'user' | 'admin';
    updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public user_id!: number;
    public username!: string;
    public email!: string;
    public password_hash!: string;
    public role!: 'user' | 'admin';
    public updatedAt?: Date;
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'),
            defaultValue: 'user'
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false
    }
);

export default User;
