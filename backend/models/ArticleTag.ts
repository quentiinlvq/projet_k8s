import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Article from './Article';
import Tag from './Tags';

interface ArticleTagAttributes {
    article_id: number;
    tag_id: number;
}

class ArticleTag extends Model<ArticleTagAttributes> implements ArticleTagAttributes {
    public article_id!: number;
    public tag_id!: number;
}

ArticleTag.init(
    {
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
    },
    {
        sequelize,
        modelName: 'ArticleTag',
        tableName: 'article_tags',
        timestamps: false
    }
);

export default ArticleTag;
