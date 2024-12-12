import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface TagsAttributes {
    tag_id: number;
    name: string;
}

class Tags extends Model<TagsAttributes> implements TagsAttributes {
    public tag_id!: number;
    public name!: string;
}

Tags.init(
    {
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
    },
    {
        sequelize,
        modelName: 'Tags',
        tableName: 'tags',
        timestamps: false
    }
);

export default Tags;
