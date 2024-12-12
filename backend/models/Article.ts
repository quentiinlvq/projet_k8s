import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import DataSource from './DataSource';
import Tag from './Tags';

interface ArticleAttributes {
    article_id: number;
    source_id: number;
    title: string;
    content?: string;
    publish_date: Date;
    url?: string;
    created_at?: Date;
    updated_at?: Date;
}

interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'article_id'> {}

class Article extends Model<ArticleAttributes, ArticleCreationAttributes> implements ArticleAttributes {
    public article_id!: number;
    public source_id!: number;
    public title!: string;
    public content?: string;
    public publish_date!: Date;
    public url?: string;
    public created_at?: Date;
    public updated_at?: Date;
}

Article.init(
    {
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        modelName: 'Article',
        tableName: 'articles',
        timestamps: false
    }
);

// Définition des relations
Article.belongsToMany(Tag, {
    through: 'ArticleTag',
    foreignKey: 'article_id',
    otherKey: 'tag_id'
});

Tag.belongsToMany(Article, {
    through: 'ArticleTag',
    foreignKey: 'tag_id',
    otherKey: 'article_id'
});

export default Article;
