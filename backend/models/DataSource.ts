import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface DataSourceAttributes {
    source_id: number;
    source_type: 'rss' | 'scraping' | 'api';
    source_name: string;
    url?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class DataSource extends Model<DataSourceAttributes> implements DataSourceAttributes {
    public source_id!: number;
    public source_type!: 'rss' | 'scraping' | 'api';
    public source_name!: string;
    public url?: string;
    public description?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

DataSource.init(
    {
        source_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        source_type: {
            type: DataTypes.ENUM('rss', 'scraping', 'api'),
            allowNull: false
        },
        source_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
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
        modelName: 'DataSource',
        tableName: 'data_sources',
        timestamps: false
    }
);

export default DataSource;
